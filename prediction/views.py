import pickle
from django.shortcuts import render
from django.http import HttpResponse

def load_ml_model():
    try:
        ml_model = pickle.load(open("./mental_health_prediction.sav", 'rb'))
    except FileNotFoundError:
        # Handle the FileNotFoundError gracefully
        ml_model = None
    return ml_model

def your_view_function(request):
    # Load the machine learning model
    ml_model = load_ml_model()
    
    if ml_model is None:
        # Handle the case when the model cannot be loaded
        error_message = "The machine learning model is not available. Please try again later."
        return HttpResponse(error_message)
    
    # Continue with your view logic using the loaded model
    # ...
