# backend/app/config.py

class Config:
    SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://your_user:your_password@localhost/your_database'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = 'your_secret_key'
