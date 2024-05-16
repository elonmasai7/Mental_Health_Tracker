from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from dotenv import load_dotenv
import google.generativeai as genai
import os
import numpy as np
import pickle

ml_model = pickle.load(open("./mental_health_prediction.sav",'rb'))

load_dotenv()
os.getenv("GOOGLE_API_KEY")

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel('gemini-pro')


def registerPage(request):
    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password1 = request.POST.get('password1')
        password2 = request.POST.get('password2')
        user = User.objects.create_user(username, email, password1)
        user.save()
        return redirect('home')

    return render(request, 'prediction/register.html')

def loginPage(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')
        else:
            return 
    return render(request, 'prediction/login.html')

    

def logoutView(request):
    logout(request)
    return redirect('home')

# Create your views here.

def home(request):
    return render(request, 'prediction/home.html')


def about(request):
    return render(request, 'prediction/about.html')


def chat(request):
    return render(request, 'prediction/chat.html')



def find_all_and_replace(text, sub):
  """
  Finds all occurrences of a substring and replaces them with an empty string.

  Args:
      text: The string to search.
      sub: The substring to replace.

  Returns:
      The modified string with all occurrences of 'sub' replaced.
  """
  new_text = text
  start = 0
  while True:
    # Find the next occurrence
    found = new_text.find(sub, start)
    if found == -1:
      break
    # Replace the occurrence and update starting position
    new_text = new_text[:found] + new_text[found+len(sub):]
    start = found
  return new_text


def predict(request):
  # ... (existing code to collect form data)
    if request.method == 'POST':
        # Extract the form data from the POST request
        feeling_nervous = 1 if request.POST.get('feeling_nervous') == 'yes' else 0
        print(feeling_nervous)
        panic = 1 if request.POST.get('panic') == 'yes' else 0
        print(panic)
        breathing_rapidly = 1 if request.POST.get('breathing_rapidly') == 'yes' else 0
        sweating = 1 if request.POST.get('sweating') == 'yes' else 0
        trouble_in_concentration = 1 if request.POST.get('trouble_in_concentration') == 'yes' else 0
        having_trouble_in_sleeping = 1 if request.POST.get('having_trouble_in_sleeping') == 'yes' else 0
        having_trouble_with_work = 1 if request.POST.get('having_trouble_with_work') == 'yes' else 0
        hopelessness = 1 if request.POST.get('hopelessness') == 'yes' else 0
        anger = 1 if request.POST.get('anger') == 'yes' else 0
        over_react = 1 if request.POST.get('over_react') == 'yes' else 0
        change_in_eating = 1 if request.POST.get('change_in_eating') == 'yes' else 0
        suicidal_thought = 1 if request.POST.get('suicidal_thought') == 'yes' else 0
        feeling_tired = 1 if request.POST.get('feeling_tired') == 'yes' else 0
        close_friend = 1 if request.POST.get('close_friend') == 'yes' else 0
        social_media_addiction = 1 if request.POST.get('social_media_addiction') == 'yes' else 0
        weight_gain = 1 if request.POST.get('weight_gain') == 'yes' else 0
        material_possessions = 1 if request.POST.get('material_possessions') == 'yes' else 0
        introvert = 1 if request.POST.get('introvert') == 'yes' else 0
        popping_up_stressful_memory = 1 if request.POST.get('popping_up_stressful_memory') == 'yes' else 0
        having_nightmares = 1 if request.POST.get('having_nightmares') == 'yes' else 0
        avoids_people_or_activities = 1 if request.POST.get('avoids_people_or_activities') == 'yes' else 0
        feeling_negative = 1 if request.POST.get('feeling_negative') == 'yes' else 0
        trouble_concentrating = 1 if request.POST.get('trouble_concentrating') == 'yes' else 0
        blamming_yourself = 1 if request.POST.get('blamming_yourself') == 'yes' else 0

        # Prediction Logic (replace with your actual model)

        input_tuple = (feeling_nervous,panic,breathing_rapidly,sweating,trouble_in_concentration, 
                 having_trouble_in_sleeping,having_trouble_with_work,hopelessness,anger,over_react,change_in_eating,suicidal_thought,feeling_tired,close_friend,social_media_addiction,weight_gain,material_possessions,introvert,popping_up_stressful_memory,having_nightmares,avoids_people_or_activities,feeling_negative,trouble_concentrating,blamming_yourself)


        input_array = np.array(input_tuple)
        print(input_array)
        input_reshaped = input_array.reshape(1, -1)
        print(input_reshaped)
        prediction = ml_model.predict(input_reshaped)
        print(prediction[0])

        # Mental health conditions and descriptions dictionary
        conditions = {
            0: {"issue": "no issues", "description": "The user is fine."},
            1: {"issue": "Anxiety", "description": "Feeling nervous, restless, or having trouble concentrating. You might also have physical symptoms like rapid heartbeat, sweating, or trouble sleeping."},
            2: {"issue": "Depression", "description": "Feeling hopeless, sad, or losing interest in activities you used to enjoy. You might also have changes in sleep or appetite."},
            3: {"issue": "Stress", "description": "Feeling overwhelmed, anxious, or irritable. Stress can also cause physical symptoms like headaches, muscle tension, or fatigue."},
            4: {"issue": "Loneliness", "description": "Feeling isolated or alone, even when you're around other people."},
            
        }

        # Access data based on prediction
        current_issue = conditions.get(prediction[0])
        print("current_issue", current_issue)

        if prediction[0] == 0:
            prompt = f"The User is completely normal. Just provide some more self care tips."
        else:
            prompt = f"Write a supportive and informative message about {current_issue['issue']}. Include information on what it is, symptoms, and how to cope."

        response = model.generate_content(prompt)
        
        def format_content(text):
            lines = text.splitlines()
            formatted_lines = []
            for line in lines:
                if line.startswith("**"):
                    formatted_lines.append(f"<strong>{line[2:-2]}</strong>")
                elif line.startswith("*"):
                    if line[2] == "*":
                        parts = line.split(":")
                        parts[0] = find_all_and_replace(parts[0], "* **")
                        parts[1] = find_all_and_replace(parts[1], "**")
                        formatted_lines.append(f"- <strong>{parts[0]}: </strong>{parts[1]}")
                    else:
                        formatted_lines.append(f"- {line[1:]}")
                else:
                    formatted_lines.append(line)
            return "<br>".join(formatted_lines) 

        formatted_content = format_content(response.text)

        context = {
            "issue": current_issue["issue"],
            "description": current_issue["description"],
            "generated_content": formatted_content,
        }

        return render(request, 'prediction/result.html', context)
    
    else:
        # If the request method is GET, just render the form
        return render(request, 'prediction/predict.html')
    



    