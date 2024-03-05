from src.database.db_mysql import get_connection
from random import randint


class CalendarService():

    @classmethod
    def get_user_calendar_events(cls, user_id):
        pass

    @classmethod
    def new_event(cls, user_id, calendar_id, event_name, event_description, event_start, event_end):
        pass

    @classmethod
    def get_event(cls, user_id, calendar_id, event_id):
        pass

    @classmethod
    def update_event(cls, user_id, calendar_id, event_id, event_name, event_description, event_start, event_end):
        pass

    