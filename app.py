from flask import Flask, jsonify, request
from flask_cors import CORS
from database import reviews_collection
from sentiment import get_sentiment

app = Flask(__name__)
CORS(app)


@app.route("/")
def home():
    return "Backend is running"


@app.route("/home")
def welcome():
    return "Welcome"


@app.route("/search")
def search():
    product = request.args.get("product")

    data = [
        {
            "review": f"{product} is amazing",
            "sentiment": "Positive"
        },
        {
            "review": f"{product} has poor battery life",
            "sentiment": "Negative"
        },
        {
            "review": f"{product} is an average product",
            "sentiment": "Neutral"
        }
    ]

    return jsonify(data)


@app.route("/analyze")
def analyze():
    product = request.args.get("product")

    reviews = [
        "Excellent camera and battery life",
        "Battery drains very quickly",
        "Display quality is okay",
        "Amazing performance",
        "The phone gets hot sometimes"
    ]

    data = []

    for review in reviews:
        sentiment = get_sentiment(review)

        data.append({
            "product": product,
            "review": review,
            "sentiment": sentiment
        })

    return jsonify(data)


@app.route("/reviews")
def reviews():
    data = []

    for item in reviews_collection.find():
        item["_id"] = str(item["_id"])
        data.append(item)

    return jsonify(data)


@app.route("/add")
def add_review():
    review = {
        "product": "Laptop",
        "review": "Very good performance",
        "sentiment": "Positive"
    }

    reviews_collection.insert_one(review)
    return "Review Added!"



if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=False)