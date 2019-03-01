# Team ??? - Alex Liu and Joshua Weiner
# SoftDev2 pd06
# K #06: Yummy Mongo Py
# 2019-02-28

import pymongo

#setup
SERVER_ADDR = "157.230.50.34"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db['primer-dataset']

#search collection by zip code
def findZip(zip):
    return collection.find({"address.zipcode":"zip"})
#search collection by borough
def findBorough(borough):
    return collection.find({"borough":"borough"})
#search collection by zip code and grade (letter)
def findZipGrade(zip,grade):
    return collection.find({'$and': [{"address.zipcode":"zip"},{"grades.0.grade":"grade"}]})
#search collection by zip code and grade (score)
def findZipScore(zip,score):
    return collection.find({'$and': [{"address.zipcode":"zip"},{"grades.0.grade":"score"}]})
