from decouple import config

class DevConfig():
    # Access the environment variables from the .env file
    MYSQL_HOST = config('MYSQL_HOST')
    MYSQL_PORT = config('MYSQL_PORT')
    MYSQL_USER = config('MYSQL_USER')
    MYSQL_PASSWORD = config('MYSQL_PASSWORD')
    MYSQL_DB = config('MYSQL_DB')

config = {
    'development': DevConfig
}

# PLEASE DO NOT MODIFY THIS FILE WITHOUT THE PERMISSION OF THE BACKEND TEAM LEADER