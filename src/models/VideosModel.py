class Videos:

    # Constructor
    def __init__(self, video_id, name, views, likes) -> None:
        self.video_id = video_id
        self.name = name
        self.views = views
        self.likes = likes

    # Convert to JSON
    def to_json(self):
        return {
            "video_id": self.video_id,
            "name": self.name,
            "views": self.views,
            "likes": self.likes
        }