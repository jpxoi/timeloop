from flask import Flask
from .routes import IndexRoutes, UsersRoutes, VideosRoutes

app = Flask(__name__)

def error404(error):
    return {'message': 'Not found'}, 404

def init_app(config):
    app.config.from_object(config)

    app.register_error_handler(404, error404)

    app.register_blueprint(IndexRoutes.main, url_prefix='/')
    app.register_blueprint(UsersRoutes.main, url_prefix='/users')
    app.register_blueprint(VideosRoutes.main, url_prefix='/videos')

    return app
