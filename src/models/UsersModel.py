class Users():

    # Constructor
    def __init__(self, user_id, username, first_name, last_name, avatar_url, email, salt, password) -> None:
        self.user_id = user_id
        self.username = username
        self.first_name	 = first_name
        self.last_name = last_name
        self.avatar_url = avatar_url
        self.email = email
        self.salt = salt
        self.password = password

    # Convert to JSON
    def to_json(self):
        return {
            "user_id": self.user_id,
            "username": self.username,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "avatar_url": self.avatar_url,
            "email": self.email,
            "salt": self.salt,
            "password": self.password
        }
