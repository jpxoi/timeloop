from flask import Blueprint, request, jsonify
import bcrypt
from src.services.AuthService import AuthService

main = Blueprint('auth_blueprint', __name__)

@main.route('/signup', methods=['POST'])
def signup():
    username = request.json['username']
    first_name = request.json['first_name']
    last_name = request.json['last_name']
    email = request.json['email']
    password = request.json['password']

    try:
        return jsonify(AuthService.sign_up(username, first_name, last_name, email, password))
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/login', methods=['POST'])
def login():
    username = request.json['username']
    password = request.json['password']

    try:
        return jsonify(AuthService.login(username, password))
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/logout', methods=['POST'])
def logout():
    try:
        return jsonify({'message': 'This is the logout route. It should logout the user'})
    except Exception as e:
        return jsonify({'message': str(e)})
