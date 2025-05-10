from flask import Blueprint, jsonify

# Initialize the blueprint
main = Blueprint('index_blueprint', __name__)


@main.route('/')
def index():
    try:
        data = {
            'status': 'success',
            'message': 'You have reached the index route! To learn more about the available routes, request the documentation to your team leader.'
        }
        return data, 200
    except Exception as e:
        data = {
            'status': 'error',
            'message': str(e)
        }
        return data, 500
