from decouple import config
import datetime
import pytz
import jwt

class Security():

    tz = pytz.timezone('Europe/London')
    secret = config('JWT_KEY')

    @classmethod
    def generate_token(cls, authenticated_user):
        payload = {
            'iat': datetime.datetime.now(tz=cls.tz),
            'exp': datetime.datetime.now(tz=cls.tz) + datetime.timedelta(minutes=1440),
            'username': authenticated_user.username,
            'first_name': authenticated_user.first_name,
            'last_name': authenticated_user.last_name,
            'email': authenticated_user.email,
        }

        return jwt.encode(payload, cls.secret, algorithm='HS256')
