from flask import Blueprint, jsonify
from src.services.VideosService import VideosService

main = Blueprint('videos_blueprint', __name__)

@main.route('/', methods=['GET'])
def videos():
    try:
        videos = VideosService.get_videos()
        if videos == None:
            return jsonify({'message': 'No videos found'})
        else:
            return jsonify({'videos': videos, 'message': 'Success'})
    except Exception as e:
        return jsonify({'message': str(e)})