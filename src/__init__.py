from flask import Flask
from .routes import IndexRoutes, CalendarsRoutes, EventsRoutes, VideosRoutes

app = Flask(__name__)

def error404(error):
    return {'message': 'Not found'}, 404

def init_app(config):
    app.config.from_object(config)

    app.register_error_handler(404, error404)

    app.register_blueprint(IndexRoutes.main, url_prefix='/')
    app.register_blueprint(CalendarsRoutes.main, url_prefix='/api/v1/calendars')
    app.register_blueprint(EventsRoutes.main, url_prefix='/api/v1/events')
    app.register_blueprint(VideosRoutes.main, url_prefix='/api/v1/videos')

    return app
