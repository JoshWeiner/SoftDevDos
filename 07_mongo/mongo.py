#Team !Dvorak - Joshua Weiner & Maggie Zhao
#SoftDev2 pd6
#K07- Import/Export Bank
#2019-03-01

'''
Nobel Laureate Database
Contains information about Nobel laureates like thier name, birthdate, birth country, the prizes they won, what year they won it, the category of their work, and the reason for winning the prize.
Raw Data: http://api.nobelprize.org/v1/laureate.json
Import Directions:
    mongoimport --db <DATABASE_NAME> --collection <COLLECTION_NAME> --drop --file PATH/laureate.json
'''
import pymongo
import pprint


SERVER_ADDR = "68.183.135.249"
connection = pymongo.MongoClient(SERVER_ADDR, 27017)
db = connection.NotDvorak
collection = db.laureates

def find_category(c):
    return collection.find({"laureates.prizes.category":c})

def find_gender(g):
    return collection.find({"laureates.gender":g})

def find_birth(bd):
    return collection.find({"laureates.born":{"$lt" : bd}})

def find_cat_date(c, d):
    return collection.find({"laureates.prizes.category": c, "laureates.prizes.year": "1911"})
'''
print("======= Nobel laureates in physics =======")
for posts in find_category("physics"):
    pprint.pprint(posts)
'''
print("======= Female Nobel laureate =======")
for posts in find_gender("female"):
    pprint.pprint(posts)
'''
print("======= Nobel laureate born before 1930 =======")
pprint.pprint(find_birth("1930"))
print("======= Nobel laureate with a Chemistry prize in 1911 =======")
for posts in find_cat_date("chemistry", "1911"):
    pprint.pprint(posts)
'''
