from src.database.db_mysql import get_connection
from random import randint


class CalendarService():

    @classmethod
    def new_event(cls, user_id, calendar_id, event_name, event_description, event_start, event_end):
        pass

    @classmethod
    def get_events(cls, user_id):
        pass

    @classmethod
    def get_event(cls, user_id, calendar_id, event_id):
        pass

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
            }