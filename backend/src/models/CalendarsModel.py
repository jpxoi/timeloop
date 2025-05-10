class Calendars():

    # Constructor
    def __init__(self, calendar_id, user_id, calendar_name, timezone) -> None:
        self.calendar_id = calendar_id
        self.user_id = user_id
        self.calendar_name = calendar_name
        self.timezone = timezone

    # Convert to JSON
    def to_json(self):
        return {
            "calendar_id": self.calendar_id,
            "user_id": self.user_id,
            "calendar_name": self.calendar_name,
            "timezone": self.timezone
        }
