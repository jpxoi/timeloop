from flask import Flask
from flask_restful import Api, Resource

app = Flask(__name__)
app.config.from_pyfile('settings.py')
api = Api(app)

class HelloWorld(Resource):
    def get(self):
        return {"Hello World" : "Hello World"}
    
api.add_resource(HelloWorld, '/')

if __name__ == '__main__':
    app.run()
