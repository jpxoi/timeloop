from src.database.db_mysql import get_connection
from src.models.UsersModel import Users
from src.services.CalendarService import CalendarService
from src.utils.Security import Security
from random import randint
import bcrypt


class AuthService():

    # Main Methods
    @classmethod
    def sign_up(cls, username, first_name, last_name, email, password):
        # Generate new user id
        user_id = 1000 + randint(0, 8999)
        id_exists = AuthService.user_id_exists(user_id)

        # Ensure that the user id is unique
        while id_exists:
            user_id = 1000 + randint(0, 8999)
            id_exists = AuthService.user_id_exists(user_id)

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

            # Create users default calendar
            calendar_name = 'Calendar'
            timezone = 'UTC'

            new_user = Users(user_id, username, first_name, last_name, avatar_url, email, salt, hashed_password)
            new_calendar = CalendarService.new_calendar(
                user_id, calendar_name, timezone)

            print(new_calendar)

            return {
                'status': 'success',
                'message': 'User created successfully',
                'data': {
                    'user_id': user_id,
                    'username': username,
                    'first_name': first_name,
                    'last_name': last_name,
                    'email': email,
                    'avatar_url': avatar_url
                }
            }, 201

        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500

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
                hashed_password = bcrypt.hashpw(
                    password.encode('utf-8'), salt.encode('utf-8'))

                print(salt)
                print(salt.encode('utf-8'))

                if hashed_password == user[7].encode('utf-8'):

                    authenticated_user = Users(
                        user[0], user[1], user[2], user[3], user[4], user[5], None, None)
                    encoded_token = Security.generate_token(authenticated_user)

                    return {
                        'status': 'success',
                        'message': 'Login successful',
                        'user_id': user[0],
                        'first_name': user[2],
                        'last_name': user[3],
                        'email': user[5],
                        'avatar_url': user[4],
                        'token': encoded_token
                    }, 200

                else:
                    return {
                        'status': 'error',
                        'message': 'Invalid password'
                    }, 401

            else:
                return {
                    'status': 'error',
                    'message': 'User not found'
                }, 404

        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500

    @classmethod
    def logout(cls, username):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM users WHERE username = %s"
                cursor.execute(sql, (username))
                user = cursor.fetchone()
            connection.close()

            if user:
                return {
                    'status': 'success',
                    'message': 'Logout successful'
                }, 200
            else:
                return {
                    'status': 'error',
                    'message': 'User not found'
                }, 404
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500

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
