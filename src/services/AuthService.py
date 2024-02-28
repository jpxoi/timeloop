from src.database.db_mysql import get_connection
from src.models.UsersModel import Users
from random import randint
import bcrypt # For password hashing and salting

class AuthService():

# Main Methods
    @classmethod
    def sign_up(cls, username, first_name, last_name, email, password):
        #Generate new user id
        user_id = 1000 + randint(0, 8999)
        id_exists = AuthService.user_id_exists(user_id)

        # Ensure that the user id is unique
        while id_exists:
            user_id = 1000 + randint(0, 8999)
            id_exists = AuthService.user_id_exists(user_id)

        # Check if the user already exists
        if AuthService.user_email_exists(email):
            return {
                'status': 'error',
                'message': 'An account with this email already exists'
            }
        
        elif AuthService.user_username_exists(username):
            return {
                'status': 'error',
                'message': 'Username already taken'
            }

        else:
            # Handle password hashing and salting
            salt = bcrypt.gensalt()
            hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

            # Define a default profile picture
            avatar_url = 'https://grallc.github.io/img/avatar.jpg'

            # Create a new user
            try: 
                connection = get_connection()
                with connection.cursor() as cursor:
                    sql = "INSERT INTO users (user_id, username, first_name, last_name, avatar_url, email, salt, password) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
                    cursor.execute(sql, (user_id, username, first_name, last_name, avatar_url, email, salt, hashed_password))
                    connection.commit()
                connection.close()
                
                return {
                    'status': 'success',
                    'message': 'User created successfully',
                    'data': {
                        'user_id': user_id,
                        'username': username,
                        'first_name': first_name,
                        'last_name': last_name,
                        'avatar_url': avatar_url,
                        'email': email
                    }
                }

            except Exception as e:
                return {
                    'status': 'error',
                    'message': str(e)
                }

    @classmethod
    def login(cls, username, password):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM users WHERE username = %s"
                cursor.execute(sql, (username))
                user = cursor.fetchone()
            connection.close()

            if user:
                # Position 6 of the user tuple contains the salt
                # Position 7 of the user tuple contains the hashed password
                salt = user[6]
                hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt.encode('utf-8'))

                print(salt)
                print(salt.encode('utf-8'))

                if hashed_password == user[7].encode('utf-8'):
                    return {
                        'status': 'success',
                        'message': 'Login successful',
                        'data': {
                            'user_id': user[0],
                            'username': user[1],
                            'first_name': user[2],
                            'last_name': user[3],
                            'avatar_url': user[4],
                            'email': user[5]
                        }
                    }

                else:
                    return {
                        'status': 'error',
                        'message': 'Invalid password'
                    }

            else:
                return {
                    'status': 'error',
                    'message': 'User not found'
                }

        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }
        
    @classmethod
    def logout(cls):
        try:
            return {
                'status': 'success',
                'message': 'User logged out'
            }
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }

# Auxiliary Methods
    @classmethod
    def user_email_exists(cls, email):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM users WHERE email = %s"
                cursor.execute(sql, (email))
                user = cursor.fetchone()
            connection.close()

            if user:
                return True
            else:
                return False
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }

    @classmethod
    def user_username_exists(cls, username):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM users WHERE username = %s"
                cursor.execute(sql, (username))
                user = cursor.fetchone()
            connection.close()

            if user:
                return True
            else:
                return False
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }

    @classmethod
    def user_id_exists(cls, user_id):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM users WHERE user_id = %s"
                cursor.execute(sql, (user_id))
                user = cursor.fetchone()
            connection.close()

            if user:
                return True
            else:
                return False
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }

