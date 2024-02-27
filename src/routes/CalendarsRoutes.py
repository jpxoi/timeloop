from flask import Blueprint, jsonify

main = Blueprint('calendars_blueprint', __name__)

@main.route('/')
def calendars():
    try:
        return jsonify({'message': 'This is the calendars route'})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>')
def calendar(id):
    try:
        return jsonify({'message': 'This is the calendar route', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})