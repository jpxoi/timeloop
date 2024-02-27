from src.database.db_mysql import get_connection

from src.models.UsersModel import Users

class AuthService():

    @classmethod
    def get_user_salt(cls, username):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM users WHERE username = %s"
                cursor.execute(sql, (username))
                result = cursor.fetchone()
                if result:
                    user = Users(result[0], result[1], result[2], result[3], result[4], result[5], result[6], result[7])
                    return user
                else:
                    return None
            connection.close()
        except Exception as e:
            print("ERROR: Failed to fetch user")
            print(e)
            return None