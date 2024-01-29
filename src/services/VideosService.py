from src.database.db_mysql import get_connection

from src.models.VideosModel import Videos

class VideosService():

    @classmethod
    def get_videos(cls):
        try:
            connection = get_connection()
            videos = []
            with connection.cursor() as cursor:
                sql = "SELECT * FROM videos"
                cursor.execute(sql)
                result = cursor.fetchall()
                for row in result:
                    video = Videos(row[0], row[1], row[2], row[3])
                    videos.append(video.to_json())
            connection.close()
            return videos
        except Exception as e:
            print("ERROR: Failed to fetch videos")
            print(e)
            return None