from flask import Blueprint, jsonify
from src.services.UsersService import UsersService

main = Blueprint('users_blueprint', __name__)

@main.route('/', methods=['GET'])
def get_users():
    try:
        return jsonify({'message': 'This is the users route. It should return all users'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>', methods=['GET'])
def get_user(id):
    try:
        return jsonify({'message': 'This is the user route. It should return user information with the given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>', methods=['PUT'])
def update_user(id):
    try:
        return jsonify({'message': 'This is the user route. It should update user information with given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    try:
        return jsonify(UsersService.delete_user(id))
    except Exception as e:
        return jsonify({'message': str(e)})
    
### Users Calendar Routes
@main.route('/<int:id>/calendars', methods=['GET'])
def get_user_calendar(id):
    try:
        return jsonify({'message': 'This is the user calendar route. It should return user calendar with the given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars', methods=['POST'])
def create_user_calendar(id):
    try:
        return jsonify({'message': 'This is the user calendar route. It should create a new user calendar with the given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars/<int:calendar_id>', methods=['GET'])
def get_user_calendar_by_id(id, calendar_id):
    try:
        return jsonify({'message': 'This is the user calendar route. It should return user calendar with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars/<int:calendar_id>', methods=['PUT'])
def update_user_calendar(id, calendar_id):
    try:
        return jsonify({'message': 'This is the user calendar route. It should update user calendar with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars/<int:calendar_id>', methods=['DELETE'])
def delete_user_calendar(id, calendar_id):
    try:
        return jsonify({'message': 'This is the user calendar route. It should delete user calendar with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
### Users Calendar Events Routes

@main.route('/<int:id>/calendars/<int:calendar_id>/events', methods=['GET'])
def get_user_calendar_events(id, calendar_id):
    try:
        return jsonify({'message': 'This is the user calendar events route. It should return user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars/<int:calendar_id>/events', methods=['POST'])
def create_user_calendar_event(id, calendar_id):
    try:
        return jsonify({'message': 'This is the user calendar events route. It should create a new user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars/<int:calendar_id>/events/<int:event_id>', methods=['GET'])
def get_user_calendar_event_by_id(id, calendar_id, event_id):
    try:
        return jsonify({'message': 'This is the user calendar events route. It should return user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id, 'event_id': event_id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars/<int:calendar_id>/events/<int:event_id>', methods=['PUT'])
def update_user_calendar_event(id, calendar_id, event_id):
    try:
        return jsonify({'message': 'This is the user calendar events route. It should update user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id, 'event_id': event_id})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@main.route('/<int:id>/calendars/<int:calendar_id>/events/<int:event_id>', methods=['DELETE'])
def delete_user_calendar_event(id, calendar_id, event_id):
    try:
        return jsonify({'message': 'This is the user calendar events route. It should delete user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id, 'event_id': event_id})
    except Exception as e:
        return jsonify({'message': str(e)})
