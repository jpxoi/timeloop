from flask import Blueprint, jsonify

main = Blueprint('events_blueprint', __name__)

@main.route('/')
def events():
    try:
        return jsonify({'message': 'This is the events route'})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>')
def event(id):
    try:
        return jsonify({'message': 'This is the calendar route', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})