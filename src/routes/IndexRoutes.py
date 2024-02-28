from flask import Blueprint, jsonify

# Initialize the blueprint
main = Blueprint('index_blueprint', __name__)

# Define the route
@main.route('/')
def index():
    try:
        return jsonify({'status': 'success', 'message': 'You have reached the index route! To learn more about the available routes, visit the documentation at...'})
    except Exception as e:
        return jsonify({'message': str(e)})
