from flask import Blueprint, request, jsonify
from src.services.UsersService import UsersService
from src.services.CalendarService import CalendarService
from src.services.EventsService import EventsService
from src.utils.Security import Security

main = Blueprint('users_blueprint', __name__)

# Users Routes
@main.route('/<int:id>', methods=['GET'])
def get_user(id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        response = UsersService.get_user(id)
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>', methods=['PUT'])
def update_user(id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        response = UsersService.update_user(id, request.json.get('first_name'), request.json.get('last_name'), request.json.get('email'), request.json.get('avatar_url'))
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>', methods=['DELETE'])
def delete_user(id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        response = UsersService.delete_user(id)
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)}), 500


# Users Calendar Routes
@main.route('/<int:id>/calendars', methods=['GET'])
def get_user_calendars(id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        response = CalendarService.get_calendars(id)
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars', methods=['POST'])
def create_user_calendar(id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        response = CalendarService.new_calendar(id, request.json.get('calendar_name'), request.json.get('timezone'))
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars/<int:calendar_id>', methods=['GET'])
def get_user_calendar_by_id(id, calendar_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar route. It should return user calendar with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars/<int:calendar_id>', methods=['PUT'])
def update_user_calendar(id, calendar_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar route. It should update user calendar with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars/<int:calendar_id>', methods=['DELETE'])
def delete_user_calendar(id, calendar_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar route. It should delete user calendar with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})


# Users Calendar Events Routes
@main.route('/<int:id>/calendars/<int:calendar_id>/events', methods=['GET'])
def get_user_calendar_events(id, calendar_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        response = EventsService.get_events(calendar_id)
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars/<int:calendar_id>/events', methods=['POST'])
def create_user_calendar_event(id, calendar_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        response = EventsService.new_event(id, calendar_id, request.json.get('event_name'), request.json.get('event_description'), request.json.get('event_start'), request.json.get('event_end'), request.json.get('event_location'), request.json.get('all_day_event'), 0, request.json.get('event_tag_id'))
        return jsonify(response[0]), response[1]
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars/<int:calendar_id>/events/<int:event_id>', methods=['GET'])
def get_user_calendar_event_by_id(id, calendar_id, event_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar events route. It should return user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id, 'event_id': event_id})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars/<int:calendar_id>/events/<int:event_id>', methods=['PUT'])
def update_user_calendar_event(id, calendar_id, event_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar events route. It should update user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id, 'event_id': event_id})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars/<int:calendar_id>/events/<int:event_id>', methods=['DELETE'])
def delete_user_calendar_event(id, calendar_id, event_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar events route. It should delete user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id, 'event_id': event_id})
    except Exception as e:
        return jsonify({'message': str(e)})
