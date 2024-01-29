from Flask import Blueprint

main = Blueprint('videos_blueprint', __name__)

@main.route('/', methods=['GET'])
def videos():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM videos"
        cursor.execute(sql)
        result = cursor.fetchall()
        videos = []
        for video in result:
            videos.append({
                "id": video[0],
                "name": video[1],
                "views": video[2],
                "likes": video[3]
            })
        if len(videos) == 0:
            return jsonify({'message': 'No videos found'})
        else:
            return jsonify({'videos': videos, 'message': 'Success'})
    except Exception as e:
        return jsonify({'message': str(e)})