from src.database.db_mysql import get_connection
from src.models.UsersModel import Users
from random import randint


class UsersService():

    @classmethod
    def get_user(cls, user_id):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT user_id, username, first_name, last_name, email, avatar_url FROM users WHERE user_id = %s"
                cursor.execute(sql, (user_id))
                result = cursor.fetchone()
            connection.close()

            if result:
                return {
                    'status': 'success',
                    'data': Users(*result, None, None).to_json()
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

    @classmethod
    def update_user(cls, user_id, first_name, last_name, email, avatar_url):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "UPDATE users SET first_name = %s, last_name = %s, email = %s, avatar_url = %s WHERE user_id = %s"
                cursor.execute(sql, (first_name, last_name, email, avatar_url, user_id))
                connection.commit()
            connection.close()

            if cursor.rowcount == 0:
                return {
                    'status': 'error',
                    'message': 'User not found'
                }, 404

            else:
                return {
                    'status': 'success',
                    'message': 'User updated successfully'
                }, 200

        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500
        

    @classmethod
    def delete_user(cls, user_id):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "DELETE FROM users WHERE user_id = %s"
                cursor.execute(sql, (user_id))
                connection.commit()
            connection.close()

            if cursor.rowcount == 0:
                return {
                    'status': 'error',
                    'message': 'User not found'
                }, 404

            else:
                return {
                    'status': 'success',
                    'message': 'User deleted successfully'
                }, 200

        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500
