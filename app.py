from flask import Flask, jsonify, request
from flask_mysqldb import MySQL
# Flask Documentation: https://flask.palletsprojects.com/en/1.1.x/quickstart/
# Flask MySQL Documentation: https://flask-mysql.readthedocs.io/en/stable/

# Initialize the app
app = Flask(__name__)
app.config.from_pyfile('config.py') # This will load the config.py file

# Initialize MySQL
mysql = MySQL(app)

@app.route('/videos', methods=['GET'])
def list_videos():
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
    
@app.route('/videos/<int:id>', methods=['GET'])
def read_video(id):
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM videos WHERE video_id = '{0}'".format(id)
        cursor.execute(sql)
        result = cursor.fetchone()
        if result != None:
            video = {
                "id": result[0],
                "name": result[1],
                "views": result[2],
                "likes": result[3]
            }
            return jsonify({'video': video, 'message': 'Success'})
        else:
            return jsonify({'message': 'Video not found'})
    except Exception as e:
        return jsonify({'message': str(e)})
    
@app.route('/videos', methods=['POST'])
def create_video():
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM videos WHERE video_id = '{0}'".format(request.json['video_id'])
        cursor.execute(sql)
        result = cursor.fetchone()
        if result != None:
            return jsonify({'message': 'Video already exists'})
        else:
            sql = "INSERT INTO videos (video_id, name, views, likes) VALUES ('{0}', '{1}', '{2}', '{3}')".format(request.json['video_id'], request.json['name'], request.json['views'], request.json['likes'])
            cursor.execute(sql)
            mysql.connection.commit() # This will confirm the changes to the database
            return jsonify({'message': 'Video created'})
    except Exception as e:
        return jsonify({'message': str(e)})
    

@app.route('/videos/<int:id>', methods=['PUT'])
def update_video(id):
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM videos WHERE video_id = '{0}'".format(id)
        cursor.execute(sql)
        result = cursor.fetchone()
        if result != None:
            sql = "UPDATE videos SET name = '{0}', views = '{1}', likes = '{2}' WHERE video_id = '{3}'".format(request.json['name'], request.json['views'], request.json['likes'], id)
            cursor.execute(sql)
            mysql.connection.commit() # This will confirm the changes to the database
            return jsonify({'message': 'Video updated'})
        else:
            return jsonify({'message': 'Video not found'})
    except Exception as e:
        return jsonify({'message': str(e)})

@app.route('/videos/<int:id>', methods=['DELETE'])
def delete_video(id):
    try:
        cursor = mysql.connection.cursor()
        sql = "SELECT * FROM videos WHERE video_id = '{0}'".format(id)
        cursor.execute(sql)
        result = cursor.fetchone()
        if result != None:
            sql = "DELETE FROM videos WHERE video_id = '{0}'".format(id)
            cursor.execute(sql)
            mysql.connection.commit() # This will confirm the changes to the database
            return jsonify({'message': 'Video deleted'})
        else:
            return jsonify({'message': 'Video not found'})
    except Exception as e:
        return jsonify({'message': str(e)})

def handle_404(error):
    return jsonify({'message': 'Not Found'}), 404

app.register_error_handler(404, handle_404) # This will handle 404 errors

if __name__ == '__main__':
    app.run()