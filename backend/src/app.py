from flask import Flask, request

app = Flask(__name__)

class User:
    def __init__(self, first_name: str, last_name: str, email: str, phone_number: str) -> None:
        self.first_name = first_name
        self.last_name = last_name

@app.route("/")
def hello_world() -> str:
    return "<p>Hello, World!</p>"

@app.get("/user")
def get_user() -> str:
    return

@app.post("/user")
def create_user() -> str:
    # TODO: fill this in
    # how to take in query parameters

    new_user = User()
    pass

# flask run --host=0.0.0.0