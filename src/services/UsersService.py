from src.database.db_mysql import get_connection
from src.models.UsersModel import Users
from random import randint

class UsersService():

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
                }
            
            else:
                return {
                    'status': 'success',
                    'message': 'User deleted successfully'
                }
        
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }
