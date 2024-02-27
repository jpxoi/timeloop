from flask import Flask
from flask_cors import CORS
from .routes import IndexRoutes, AuthRoutes, UsersRoutes, TimezonesRoutes, VideosRoutes

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

def error404(error):
    return {'message': 'Not found'}, 404

def init_app(config):
    app.config.from_object(config)

    app.register_error_handler(404, error404)

    app.register_blueprint(IndexRoutes.main, url_prefix='/')
    app.register_blueprint(AuthRoutes.main, url_prefix='/api/v1/auth')
    app.register_blueprint(UsersRoutes.main, url_prefix='/api/v1/users')
    app.register_blueprint(TimezonesRoutes.main, url_prefix='/api/v1/timezones')
    app.register_blueprint(VideosRoutes.main, url_prefix='/api/v1/videos')

    return app
