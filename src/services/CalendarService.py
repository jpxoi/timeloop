from src.database.db_mysql import get_connection
from src.models.CalendarsModel import Calendars
from random import randint

class CalendarService():

    @classmethod
    def new_calendar(cls, user_id, calendar_name, timezone):
        # Generate new calendar id
        calendar_id = 1000 + randint(0, 8999)
        id_exists = CalendarService.calendar_id_exists(calendar_id)

        # Ensure that the calendar id is unique
        while id_exists:
            calendar_id = 1000 + randint(0, 8999)
            id_exists = CalendarService.calendar_id_exists(calendar_id)

        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "INSERT INTO calendars (calendar_id, user_id, calendar_name, timezone) VALUES (%s, %s, %s, %s)"
                cursor.execute(sql, (calendar_id, user_id, calendar_name, timezone))
                connection.commit()
            connection.close()

            new_calendar = Calendars(calendar_id, user_id, calendar_name, timezone)
            
            return {
                'status': 'success',
                'message': 'Calendar created successfully',
                'data': new_calendar.to_json()
            }
        
        except Exception as e:
            return {
                'status': 'error',
                'message': str(e)
            }

    @classmethod
    def calendar_id_exists(cls, calendar_id):
        try:
            connection = get_connection()
            with connection.cursor() as cursor:
                sql = "SELECT * FROM calendars WHERE calendar_id = %s"
                cursor.execute(sql, (calendar_id))
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
