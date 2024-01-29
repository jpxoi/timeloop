from Flask import Blueprint, jsonify
from src.services import VideosService

main = Blueprint('videos_blueprint', __name__)

@main.route('/', methods=['GET'])
def videos():
    try:
        videos = VideosService.list_videos()
        if len(videos) == 0:
            return jsonify({'message': 'No videos found'})
        else:
            return jsonify({'videos': videos, 'message': 'Success'})
    except Exception as e:
        return jsonify({'message': str(e)})