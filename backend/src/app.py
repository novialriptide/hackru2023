from flask import Flask, request
import json

app = Flask(__name__)

class User:
    def __init__(self, username: str, password: str, first_name: str, last_name: str, email: str, phone_number: str) -> None:
        self.first_name = first_name
        self.last_name = last_name

class Server:
    
    def __init__(self, user_list: list):
        self.user_list = []

    @app.route("/")
    def hello_world() -> str:
        return "<p>Hello, Andrew Hong</p>"

    @app.get("/user")
    def get_user() -> str:

        username = request.args['username']
        first_name = request.args['first_name']
        last_name = request.args['last_name']
        email = request.args['email']
        phone_number = request.args['phone_number']

        user_string = '{"username": "' + username + '", "first_name": "' + first_name + '", "last_name": "' + last_name + '", "email": "' + email + '", "phone_number": "' + phone_number + '"}'
        user_json = json.loads(user_string)

        return user_json

    @app.post("/user")
    def create_user(self) -> str:
        # TODO: fill this in
        # how to take in query parameters
        username = request.args['username']
        password = request.args['password']
        first_name = request.args['first_name']
        last_name = request.args['last_name']
        email = request.args['email']
        phone_number = request.args['phone_number']

        new_user = User(username, first_name, last_name, email, phone_number)
        
        self.user_list.append(new_user)

        return

# flask run --host=0.0.0.0