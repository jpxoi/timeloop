from decouple import config
import datetime
import pytz
import jwt

class Security():

    tz = pytz.timezone('Europe/London')
    secret = config('JWT_KEY')
    session_duration = 1440 # 24 hours

    # 24 hours = 1440 minutes
    # 48 hours = 2880 minutes
    # 72 hours = 4320 minutes
    # 1 week = 10080 minutes
    # 1 month = 43200 minutes

    @classmethod
    def generate_token(cls, authenticated_user):
        payload = {
            'iat': datetime.datetime.now(tz=cls.tz),
            'exp': datetime.datetime.now(tz=cls.tz) + datetime.timedelta(minutes=cls.session_duration),
            'user_id': authenticated_user.user_id,
            'username': authenticated_user.username,
            'first_name': authenticated_user.first_name,
            'last_name': authenticated_user.last_name,
            'avatar_url': authenticated_user.avatar_url,
            'email': authenticated_user.email,
        }

        return jwt.encode(payload, cls.secret, algorithm='HS256')

    @classmethod
    def verify_token(cls, headers):
        if 'Authorization' in headers:
            token = headers['Authorization']
            encoded_token = token.split(' ')[1]

            try:
                payload = jwt.decode(encoded_token, cls.secret, algorithms=['HS256'])
                if payload:
                    return True
            except (jwt.DecodeError, jwt.ExpiredSignatureError, jwt.InvalidSignatureError) as e:
                return False

        return False
