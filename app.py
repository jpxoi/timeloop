from flask import Flask, request, jsonify

APP = Flask(__name__)
APP.config.from_pyfile('settings.py')

@APP.route('/')
def home():
    return "Hello World!"

if __name__ == '__main__':
    APP.run()
