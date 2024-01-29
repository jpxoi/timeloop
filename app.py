from config import config
from src import init_app

app = init_app(config['development'])

if __name__ == '__main__':
    app.run()