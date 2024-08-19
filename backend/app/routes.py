# backend/app/routes.py

from flask import Blueprint, request, jsonify
from .services import create_message, get_all_messages, create_cv, get_all_cvs

main = Blueprint('main', __name__)

@main.route('/messages', methods=['GET', 'POST'])
def manage_messages():
    if request.method == 'POST':
        data = request.json
        message = create_message(subject=data['subject'], body=data['body'])
        return jsonify({"message": "Message created", "id": message.id}), 201

    messages = get_all_messages()
    return jsonify([{'id': msg.id, 'subject': msg.subject, 'body': msg.body} for msg in messages])

@main.route('/cvs', methods=['GET', 'POST'])
def manage_cvs():
    if request.method == 'POST':
        data = request.json
        cv = create_cv(name=data['name'], content=data['content'])
        return jsonify({"message": "CV created", "id": cv.id}), 201

    cvs = get_all_cvs()
    return jsonify([{'id': cv.id, 'name': cv.name, 'content': cv.content} for cv in cvs])
