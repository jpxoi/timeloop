from decouple import config
import pymysql

def get_connection():
    try:
        return pymysql.connect(
            host = config('MYSQL_HOST'),
            port = int(config('MYSQL_PORT')),
            user = config('MYSQL_USER'),
            password = config('MYSQL_PASSWORD'),
            db = config('MYSQL_DB'),
        )
    except Exception as e:
        print("ERROR: Failed to connect to database")
        print(e)
        return None

# PLEASE DO NOT MODIFY THIS FILE WITHOUT THE PERMISSION OF THE BACKEND TEAM LEADER