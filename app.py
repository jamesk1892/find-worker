import os
import logging
from flask import Flask, render_template, redirect, url_for, flash, request
from flask_login import LoginManager, login_user, logout_user, login_required, current_user, UserMixin

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Create the Flask application
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "default_secret_key")

# Initialize Flask-Login
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

# Create a simple User class
class User(UserMixin):
    def __init__(self, id):
        self.id = id

# User loader for Flask-Login
@login_manager.user_loader
def load_user(user_id):
    return User(user_id)

# Define routes
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/job-seekers")
def job_seekers():
    return render_template("job_seekers.html")

@app.route("/recruiters")
def recruiters():
    return render_template("recruiters.html")

@app.route("/pricing")
def pricing():
    return render_template("pricing.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/login")
def login():
    # Simplified login page without form handling
    return render_template("login.html")

@app.route("/register")
def register():
    # Simplified register page without form handling
    return render_template("register.html")

@app.route("/profile")
def profile():
    # Dummy profile page
    return render_template("profile.html")

@app.route('/google_login')
def google_login():
    # Placeholder for Google login
    return redirect(url_for('login'))

@app.route("/logout")
def logout():
    return redirect(url_for('index'))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)