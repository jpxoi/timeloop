from os import environ

SECRET_KEY = environ.get('SECRET_KEY')

# SECURITY WARNING: do not store the secret key as plain text in this file. Get the secret key from an environment variable and store it in a variable. You can use the os.environ.get() function to get an environment variable.

# Before adding more variables, contact the team leader. The team leader will decide if the variable should be added to the settings.py file or if it should be added to the .env file.