from flask import Blueprint, jsonify

# Initialize the blueprint
main = Blueprint('index_blueprint', __name__)

# Define the route
@main.route('/')
def index():
    try:
        return jsonify({'message': 'This is the index route.'})
    except Exception as e:
        return jsonify({'message': str(e)})
