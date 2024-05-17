from django.shortcuts import render
from django.http import HttpResponse
from urllib import request
from urllib.request import Request
from django.http import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib import messages    
from django.core.mail import EmailMessage, send_mail

from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.utils.encoding import force_bytes, force_str
from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import AnonymousUser, User
from django.views.generic import TemplateView
from .forms import HomeForm, HomeForm2
from .process import *
from .models import *
from django.contrib import messages
import io
import cv2
import numpy
import imutils
import tensorflow as tf
import numpy as np
from keras.applications.vgg16 import  preprocess_input
from PIL import Image
from .forms import NewUserForm
from django.shortcuts import  render, redirect
from .forms import NewUserForm
from django.contrib.auth import login, authenticate #add this
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm #add thi
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserRegisterForm
from django.core.mail import send_mail
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template
from django.template import Context

def index(request):
    return render (request,'index.html')
##########################################################################################################

def about(request):
    return render (request,'about-me.html')
##########################################################################################################

def activity(request):
    return render (request,'activity.html')
##########################################################################################################

def adhd(request):
    return render (request,'adhd.html')
##########################################################################################################

def anxiety(request):
    return render (request,'anxiety.html')
##########################################################################################################

def appointment(request):
    return render (request,'appointment.html')
##########################################################################################################

def bipolar(request):
    return render (request,'bipolar.html')
##########################################################################################################

def categorymasonry2columns(request):
    return render (request,'category-masonry-2-columns.html')
##########################################################################################################

def categorymasonry3columns(request):
    return render (request,'category-masonry-3-columns.html')
##########################################################################################################

def categoryportfoliocolumns(request):
    return render (request,'category-portfolio-3-columns.html')
##########################################################################################################

def categorypostformats(request):
    return render (request,'category-post-formats.html')
##########################################################################################################

def categorystandardblog(request):
    return render (request,'category-standard-blog.html')
##########################################################################################################

def categorywithoutsidebar(request):
    return render (request,'category-without-sidebar.html')
##########################################################################################################

def contact(request):
    return render (request,'contact.html')
##########################################################################################################

def depretion(request):
    return render (request,'depretion.html')
##########################################################################################################

def gallerycobbles(request):
    return render (request,'gallery-cobbles.html')
##########################################################################################################


def gallerygrid(request):
    return render (request,'gallery-grid.html')
##########################################################################################################

def gallerymasonry(request):
    return render (request,'gallery-masonry.html')
##########################################################################################################

def groups(request):
    return render (request,'groups.html')
##########################################################################################################

def index2(request):
    return render (request,'index-2.html')
##########################################################################################################

def members(request):
    return render (request,'members.html')
##########################################################################################################

def poststandard(request):
    return render (request,'post-standard.html')
##########################################################################################################
def pricing(request):
    return render (request,'pricing.html')
##########################################################################################################
def productsingle(request):
    return render (request,'product-single.html')
##########################################################################################################
def psychosis(request):
    return render (request,'psychosis.html')
##########################################################################################################
def shop(request):
    return render (request,'shop.html')
##########################################################################################################
def shortcodes(request):
    return render (request,'shortcodes.html')
##########################################################################################################
def typography(request):
    return render (request,'typography.html')
##########################################################################################################
def lobby1(request):
    return render(request, 'base/lobby1.html')
##########################################################################################################
def ml(request):
    return render(request, 'ML-model.html')
##########################################################################################################
def login(request):
    return render(request, 'accounts/login.html')
##########################################################################################################
class HomeView3(TemplateView):

	# Define template for this view
	template_name = 'form3.html'

	# Handle HTTP GET requests through this view

 

	def get(self, request):

		# Define the form
		form = HomeForm()

		# Render the page with the form included
		args = {'form': form,}
		return render(request, self.template_name, args)

	# Handle HTTP POST requests through this view
        

	def post(self, request):
        
		# Define the form
		form = HomeForm(request.POST)

		# Validate input
		if form.is_valid():


			# Store cleaned input data
			posted = form.cleaned_data['post']

			# Process data
			result = computeGC(form.cleaned_data['post'])


			# Clear text field
			form = HomeForm()										

		# Render the page with form and result data
    
		args = {'form': form, 'posted': posted, 'result': result}

		return render(request, self.template_name, args)

# Default view for this app
class HomeView4(TemplateView):

	# Define the HTML template
	template_name = 'form4.html'

	# Handle HTTP GET requests through this view

	def get(self, request):
		
		# Define the form
		form = HomeForm2()

		# Render the page
		args = {'form': form,}
		return render(request, self.template_name, args)

	# Handle HTTP POST requests through this view

	def post(self, request):

		# Define the form
		form = HomeForm2(request.POST)

		# Validate input
		if form.is_valid():
			posted = form.cleaned_data['post']
			against = form.cleaned_data['against']
			result = parseMotif(posted, against)
			form = HomeForm2()				

		# Render page with results							
		args = {
			'form': form, 
			'posted': posted, 
			'against': against,
			'result': result,
		}
		return render(request, self.template_name, args)



class HomeView5(TemplateView):

	# template for this view
	template_name = 'form5.html'

	# Handle HTTP GET requests through this view
	
	def get(self, request):

		# Define the form
		form = HomeForm()

		# Render the page with form included
		args = {'form': form,}
		return render(request, self.template_name, args)

	# Handle HTTP POST requests through this view

	def post(self, request):
		# Define the form
		form = HomeForm(request.POST)
		# Validate input
		if form.is_valid():
			# Store data from input field
			posted = form.cleaned_data['post']

			# Calculate results
			result = baseDistribution(posted)
			total = sum(result)
			distribution = []
			for i in range(0, len(result)):
				distribution.append((str((round(result[i] / total*100),'%','Base Pairs'             ))))
			# clear text field
			form = HomeForm()
		# Render the page with new args
		args = {
			'form': form, 
			'posted': posted, 
			'result': result,
			'distribution': distribution
		}
		return render(request, self.template_name, args)

###################################ML#################################################


from django.shortcuts import render
from keras.layers import Input
from django.contrib import messages
import io
import cv2
import numpy
import imutils
import tensorflow as tf
import numpy as np
from keras.applications.vgg16 import preprocess_input
from PIL import Image
from tensorflow import *

def convert_img_to_batch_opencv(my_img):
    img = cv2.imread(my_img)
    if img is None:
        print("Error: Image not loaded")
        return None
    img = cv2.resize(img, dsize=(224, 224), interpolation=cv2.INTER_CUBIC)
    gray = cv2.cvtColor(img, cv2.COLOR_RGB2GRAY)
    gray = cv2.GaussianBlur(gray, (5, 5), 0)
    # threshold the image, then perform a series of erosions +
    # dilations to remove any small regions of noise
    thresh = cv2.threshold(gray, 45, 255, cv2.THRESH_BINARY)[1]
    thresh = cv2.erode(thresh, None, iterations=2)
    thresh = cv2.dilate(thresh, None, iterations=2)
    # find contours in thresholded image, then grab the largest one
    cnts = cv2.findContours(thresh.copy(), cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    c = max(cnts, key=cv2.contourArea)
    # find the extreme points
    extLeft = tuple(c[c[:, :, 0].argmin()][0])
    extRight = tuple(c[c[:, :, 0].argmax()][0])
    extTop = tuple(c[c[:, :, 1].argmin()][0])
    extBot = tuple(c[c[:, :, 1].argmax()][0])
    # add contour on the image
    img_cnt = cv2.drawContours(img.copy(), [c], -1, (0, 255, 255), 4)
    # add extreme points
    img_pnt = cv2.circle(img_cnt.copy(), extLeft, 8, (0, 0, 255), -1)
    img_pnt = cv2.circle(img_pnt, extRight, 8, (0, 255, 0), -1)
    img_pnt = cv2.circle(img_pnt, extTop, 8, (255, 0, 0), -1)
    img_pnt = cv2.circle(img_pnt, extBot, 8, (255, 255, 0), -1)
    # crop
    ADD_PIXELS = 0
    new_img = img[extTop[1] - ADD_PIXELS:extBot[1] + ADD_PIXELS, extLeft[0] - ADD_PIXELS:extRight[0] + ADD_PIXELS].copy()
    img = cv2.resize(new_img, dsize=(224, 224), interpolation=cv2.INTER_CUBIC)
    img = preprocess_input(img)
    img = np.array([img])
    return img

def predict_tumor(img):
    model = tf.keras.models.load_model('models/2019-06-07_VGG_model.h5')
    predictions = model.predict(convert_img_to_batch_opencv(img))
    predictions = [1 if x >0.67 else 0 for x in predictions]
    return predictions[0]

def compare_2_model( res2 , res1):
    CATEGORIES = ["glioma", "meningioma", "no_tumor", "pituitary"]
    if (res2 == 2 and res1==1):
        return 1
    if (res2 == 0 and res1==0):
        return 2
    if (res2 == 1 and res1 == 0):
        return 3
    if (res2 == 2 and res1==0):
         return 0
    if (res2 == 3 and res1 == 0):
        print("pituitary")
        return 4
    else:
         return CATEGORIES[res2]

def Radiology_Diagnostics(request):
    try:
        if request.method == "POST" and request.FILES['myfile']:
            try:
                my_f = request.FILES["myfile"].read()
                image = Image.open(io.BytesIO(my_f))
                opencvImage_model_1 = cv2.cvtColor(numpy.array(image), cv2.COLOR_RGB2BGR)
                res1 = predict_tumor(opencvImage_model_1)
                opencvImage_model_2 = cv2.cvtColor(numpy.array(image), cv2.COLOR_RGB2GRAY)
                X = cv2.resize(opencvImage_model_2, (150, 150))
                X= x.reshape((150, 150, 1))
                X = X / 255.0
                x = np.array([X])
                mymodel = tf.keras.models.load_model('models/mod2.h5')
                predictions = mymodel.predictclasses(X)
                res2 = predictions[0]
                fin_res = compare_2_model(res2, res1)
                print(fin_res)
                context = { "fin_re": fin_res , "test":"test" }
                return render(request, 'show_res.html' , context)
            except:
                    print("error occurs")
    except :
            pass
    return render(request, 'Radiology_Diagnostics.html')

def show_res(request):

    return render(request, 'show_res.html')

def show_res2(request):

    return render(request, 'healthy.html')

from io import StringIO

from xhtml2pdf import pisa
from django.template.loader import get_template
from django.template import Context
from django.http import HttpResponse
#from cgi import escape
from html import escape



def render_to_pdf(template_src, context_dict):
    template = get_template(template_src)
    context = Context(context_dict)
    html  = template.render(context)
    result = StringIO.StringIO()

    pdf = pisa.pisaDocument(StringIO.StringIO(html.encode("ISO-8859-1")), result)
    if not pdf.err:
        return HttpResponse(result.getvalue(), content_type='application/pdf')
    return HttpResponse('We had some errors<pre>%s</pre>' % escape(html))
