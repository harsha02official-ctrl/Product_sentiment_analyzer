from pymongo import MongoClient

# Local MongoDB connection
client = MongoClient("mongodb://localhost:27017/")

# Create or connect to database
db = client["product_sentiment_db"]

# Create or connect to collection
reviews_collection = db["reviews"]

