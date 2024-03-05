from flask import Blueprint, request, jsonify
from src.services.UsersService import UsersService
from src.utils.Security import Security

main = Blueprint('users_blueprint', __name__)


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

    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    email = request.json.get('email')
    avatar_url = request.json.get('avatar_url')

    try:
        response = UsersService.update_user(id, first_name, last_name, email, avatar_url)
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
def get_user_calendar(id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar route. It should return user calendar with the given id.', 'id': id})
    except Exception as e:
        return jsonify({'message': str(e)})

@main.route('/<int:id>/calendars', methods=['POST'])
def create_user_calendar(id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar route. It should create a new user calendar with the given id.', 'id': id})
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
        return jsonify({'message': 'This is the user calendar events route. It should return user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id})
    except Exception as e:
        return jsonify({'message': str(e)})


@main.route('/<int:id>/calendars/<int:calendar_id>/events', methods=['POST'])
def create_user_calendar_event(id, calendar_id):
    has_access = Security.verify_token(request.headers)

    if not has_access:
        return jsonify({'status': 'error', 'message': 'Unauthorized'}), 401

    try:
        return jsonify({'message': 'This is the user calendar events route. It should create a new user calendar events with the given id.', 'id': id, 'calendar_id': calendar_id})
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
