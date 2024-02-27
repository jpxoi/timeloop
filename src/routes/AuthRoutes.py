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

    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)

    try:
        # Create new user in the database
        # user = User(username, first_name, last_name, email, hashed_password)
        # user.save()
        
        # Return if successful
        return jsonify({'message': 'User created successfully'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/login', methods=['POST'])
def login():
    try:
        return jsonify({'message': 'This is the login route. It should login the user'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/logout', methods=['POST'])
def logout():
    try:
        return jsonify({'message': 'This is the logout route. It should logout the user'})
    except Exception as e:
        return jsonify({'message': str(e)})
