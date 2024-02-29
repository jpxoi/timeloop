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
            'user_id': authenticated_user.user_id,
            'username': authenticated_user.username,
            'email': authenticated_user.email,
        }

        return jwt.encode(payload, cls.secret, algorithm='HS256')
