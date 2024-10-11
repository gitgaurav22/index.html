from pymongo import MongoClient
#connect to mongo server
Client=MongoClient('mongodb://localhost:27017/')
#create or switch to a database
db=Client['my_database']
#create or switch to a collection
collection=db['my_collection']
#Insert a single document into the collection
document={"name":"John Doe","age":29,"city":"San Francisco"}
insert_result=collection.insert_one(document)
print(f"Insert document ID:{insert_result.inserted_id}")

#Insert multiple documents
documents=[{"name":"John Doe","age":31,"city":"Los Angeles"},
           {"name":"Mike Smith","age":25,"city":"Chicago"}
]

insert_many_result=collection.insert_many(documents)
print(f"Inserted document IDs:{insert_many_result.inserted_ids}")

# Find a single document
single_document=collection.find_one({"name":"John Doe"})
print("Single document found:",single_document)

#Find all documents
all_documents=collection.find()
for doc in all_documents :
    print("Filtered document:",doc)

#Update a document
update_result=collection.update_one(
    {"name":"John Doe"},
    {"$set":{"age":30}}
    )
print(f"Matched documents count:{update_result.matched_count}")

# Delete a document
delete_result=collection.delete_one({"name":"Mike Smith"})
print(f"Deleted documents count:{delete_result.deleted_count}")\
 inser_result = collection.insert_many(documnet)
 return jsion.fy("inserted documnt IDs":[str(_id )])
 return jsonfy(['filtered documents': list(filtered_document)])
 