from flask import Blueprint, jsonify

# Initialize the blueprint
main = Blueprint('timezones_blueprint', __name__)

# Define the route
@main.route('/')
def timezones():
    try:
        return jsonify({'message': 'This is the timezones route. It should return all timezones'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>')
def timezone(id):
    try:
        return jsonify({'message': 'This is the timezone route. It should return timezone information with the given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})
