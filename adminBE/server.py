from flask import Flask,jsonify,request
from pymongo import MongoClient
from flask_cors import CORS
from bson.objectid import ObjectId

app=Flask(__name__)

CORS(app)  

# Database connection
client=MongoClient("mongodb://localhost:27017/")
db=client["userdb"] 
collection=db["users"] 

#Fetch
@app.route('/api/users',methods=['GET'])
def getUsers():
    users = list(collection.find())
    for user in users:
        user['_id'] = str(user['_id'])
    return jsonify(users)

#Insert
@app.route('/api/insert',methods=['POST'])
def addUsers():
    data=request.json
    collection.insert_one(data)
    return jsonify({'message':'User Added'}),200

#Update
@app.route('/api/update/<id>', methods=['PUT'])
def updateUsers(id):
    try:
        data = request.json
        result = collection.update_one(
            {"_id": ObjectId(id)},
            {"$set": data}
        )

        if result.matched_count > 0:
            return jsonify({'message': 'User Updated'}), 200
        else:
            return jsonify({'message': 'User Not Found'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500

#Delete
@app.route('/api/delete/<id>', methods=['DELETE'])
def deleteUsers(id):
    try:
        result = collection.delete_one({"_id": ObjectId(id)})

        if result.deleted_count > 0:
            return jsonify({'message': 'User Deleted'}), 200
        else:
            return jsonify({'message': 'User Not Found'}), 404

    except Exception as e:
        return jsonify({'error': str(e)}), 500



if __name__=='__main__':
    app.run(debug=True)