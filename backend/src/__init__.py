from flask import Flask
from flask_cors import CORS
from .routes import IndexRoutes, AuthRoutes, UsersRoutes

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": ['http://localhost:5173', 'https://timeloop.vercel.app', 'https://l13d3x43-5173.uks1.devtunnels.ms']}})

def error404(error):
    message = error.description
    status = error.code
    return {'status': 'error','message': message}, 404

def init_app(config):
    app.config.from_object(config)

    app.register_error_handler(404, error404)

    app.register_blueprint(IndexRoutes.main, url_prefix='/')
    app.register_blueprint(AuthRoutes.main, url_prefix='/api/v1/auth')
    app.register_blueprint(UsersRoutes.main, url_prefix='/api/v1/users')


    return app
