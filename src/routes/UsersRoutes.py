from flask import Blueprint, jsonify

main = Blueprint('users_blueprint', __name__)

@main.route('/', methods=['GET'])
def users():
    try:
        return jsonify({'message': 'This is the users route. It should return all users'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>', methods=['GET'])
def user(id):
    try:
        return jsonify({'message': 'This is the user route. It should return user information with the given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>', methods=['PUT'])
def user(id):
    try:
        return jsonify({'message': 'This is the user route. It should update user information with given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>', methods=['DELETE'])
def user(id):
    try:
        return jsonify({'message': 'This is the user route', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})