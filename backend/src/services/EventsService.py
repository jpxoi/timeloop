from src.database.db_mysql import get_connection
from random import randint


class EventsService():

    @classmethod
    def new_event(cls, user_id, calendar_id, event_name, event_description, event_start, event_end, event_location, all_day_event, reccurence_rule_id, event_type_id):
        # Generate new event id
        event_id = calendar_id * 10000 + randint(0, 9999)
        id_exists = cls.event_id_exists(event_id)

        # Ensure that the event id is unique
        while id_exists:
            event_id = calendar_id * 10000 + randint(0, 9999)
            id_exists = cls.event_id_exists(event_id)

        # Parse all_day_event to boolean integer
        if all_day_event == 'true':
            all_day_event = '1'
        else:
            all_day_event = '0'

        # Parse event_start and event_end to datetime
        event_start = event_start.replace('T', ' ')
        event_end = event_end.replace('T', ' ')

        # Insert new event into the database
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "INSERT INTO events (event_id, calendar_id, event_title, event_description, event_start_datetime, event_end_datetime, event_location, all_day_event, reccurence_rule_id, event_type_id) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
                cursor.execute(
                    sql, (event_id, calendar_id, event_name, event_description, event_start, event_end, event_location, all_day_event, reccurence_rule_id, event_type_id))
                connection.commit()
            connection.close()

            return {
                'status': 'success',
                'message': 'Event created successfully',
                'data': {
                    'event_id': event_id,
                    'calendar_id': calendar_id,
                    'user_id': user_id,
                    'event_name': event_name,
                    'event_description': event_description,
                    'event_start': event_start,
                    'event_end': event_end
                }
            }, 201
        
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500
            

    @classmethod
    def get_events(cls, calendar_id):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM events WHERE calendar_id = %s"
                cursor.execute(sql, (calendar_id))
                result = cursor.fetchall()
            connection.close()

            events = []
            for row in result:
                events.append({
                    'event_id': row[0],
                    'calendar_id': row[1],
                    'user_id': row[2],
                    'event_name': row[3],
                    'event_description': row[4],
                    'event_start': row[5],
                    'event_end': row[6]
                })

            if not events:
                return {
                    'status': 'error',
                    'message': 'No events found'
                }, 404

            return {
                'status': 'success',
                'message': 'Events retrieved successfully',
                'data': events
            }, 200
        
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500

    @classmethod
    def get_event(cls, user_id, calendar_id, event_id):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM events WHERE event_id = %s AND calendar_id = %s AND user_id = %s"
                cursor.execute(sql, (event_id, calendar_id, user_id))
                result = cursor.fetchone()
            connection.close()

            if not result:
                return {
                    'status': 'error',
                    'message': 'Event not found'
                }, 404

            event = {
                'event_id': result[0],
                'calendar_id': result[1],
                'user_id': result[2],
                'event_name': result[3],
                'event_description': result[4],
                'event_start': result[5],
                'event_end': result[6]
            }

            return {
                'status': 'success',
                'message': 'Event retrieved successfully',
                'data': event
            }, 200

        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }, 500

    @classmethod
    def update_event(cls, user_id, calendar_id, event_id, event_name, event_description, event_start, event_end):
        pass

    @classmethod
    def delete_event(cls, user_id, calendar_id, event_id):
        pass

    @classmethod
    def event_id_exists(cls, event_id):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM events WHERE event_id = %s"
                cursor.execute(sql, (event_id))
                result = cursor.fetchone()
            connection.close()

            if result:
                return True
            else:
                return False

        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            },