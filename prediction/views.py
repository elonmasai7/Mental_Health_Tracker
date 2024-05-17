from django.shortcuts import render
from django.http import HttpResponse
import pickle

def about(request):
    return render(request, 'about.html')

def load_ml_model():
    try:
        ml_model = pickle.load(open("./mental_health_prediction.sav", 'rb'))
    except FileNotFoundError:
        ml_model = None
    return ml_model

def predict(request):
    ml_model = load_ml_model()
    
    if ml_model is None:
        error_message = "The machine learning model is not available. Please try again later."
        return HttpResponse(error_message)
    
    # Example logic for prediction (this needs to be adapted to your actual model usage)
    # Input data for prediction can be extracted from the request
    # result = ml_model.predict(input_data)

    return HttpResponse("Prediction results here")

def home(request):
    return render(request, 'home.html')  # Render a template for the home page
