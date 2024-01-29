from flask import Blueprint, jsonify

main = Blueprint('users_blueprint', __name__)

@main.route('/')
def users():
    try:
        return jsonify({'message': 'This is the users route'})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>')
def user(id):
    try:
        return jsonify({'message': 'This is the user route', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})