from flask import Blueprint, jsonify

main = Blueprint('index_blueprint', __name__)

@main.route('/')
def index():
    try:
        return jsonify({'message': 'This is the index route.'})
    except Exception as e:
        return jsonify({'message': str(e)})