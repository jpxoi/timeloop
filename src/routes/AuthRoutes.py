from flask import Blueprint, request, jsonify
from src.services.AuthService import AuthService

main = Blueprint('auth_blueprint', __name__)

@main.route('/signup', methods=['POST'])
def signup():
    data = request.json

    try:
        if AuthService.user_email_exists(data['email']):
            return {
                'status': 'error',
                'message': 'An account with this email already exists'
            }, 409
        
        if AuthService.user_username_exists(data['username']):
            return {
                'status': 'error',
                'message': 'Username already taken'
            }, 409
        
        response = AuthService.sign_up(data['username'], data['first_name'], data['last_name'], data['email'], data['password'])
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@main.route('/login', methods=['POST'])
def login():
    data = request.json

    try:
        response = AuthService.login(data['username'], data['password'])
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)}), 500

@main.route('/logout', methods=['POST'])
def logout():
    try:
        return jsonify({'message': 'This is the logout route. It should logout the user'}), 200
    except Exception as e:
        return jsonify({'message': str(e)}), 500
