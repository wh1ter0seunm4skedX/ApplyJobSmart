# backend/app/services.py

from .models import Message, CV, db

def create_message(subject, body):
    new_message = Message(subject=subject, body=body)
    db.session.add(new_message)
    db.session.commit()
    return new_message

def get_all_messages():
    return Message.query.all()

def create_cv(name, content):
    new_cv = CV(name=name, content=content)
    db.session.add(new_cv)
    db.session.commit()
    return new_cv

def get_all_cvs():
    return CV.query.all()
