from flask import Blueprint, jsonify

main = Blueprint('auth_blueprint', __name__)

@main.route('/signup', methods=['POST'])
def signup():
    try:
        return jsonify({'message': 'This is the signup route. It should create a new user'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/login', methods=['POST'])
def login():
    try:
        return jsonify({'message': 'This is the login route. It should return a token'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/logout', methods=['POST'])
def logout():
    try:
        return jsonify({'message': 'This is the logout route. It should logout the user'})
    except Exception as e:
        return jsonify({'message': str(e)})
