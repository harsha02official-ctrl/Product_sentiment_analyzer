from textblob import TextBlob

def get_sentiment(review):
    review_lower = review.lower()

    negative_words = [
        "hot", "overheat", "slow", "terrible",
        "bad", "poor", "drains", "disappointing"
    ]

    for word in negative_words:
        if word in review_lower:
            return "Negative"

    polarity = TextBlob(review).sentiment.polarity

    if polarity > 0.2:
        return "Positive"
    elif polarity < -0.2:
        return "Negative"
    else:
        return "Neutral"