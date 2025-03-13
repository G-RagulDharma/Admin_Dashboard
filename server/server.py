from flask import Flask,jsonify,request
from pymongo import MongoClient

app=Flask(__name__)

# Database connection
client=MongoClient("mongodb://localhost:27017/")
db=client["userdb"] #Database Name
collection=db["users"] # Collection name



if __name__=='__main__':
    app.run(debug=True)