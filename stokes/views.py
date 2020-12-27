from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import EmailMessage
from .models import application, Event, message, Brand, New_Product
import boto3
from pathlib import Path
import os


def index(request):
    new_products = New_Product.objects.all()
    brands = Brand.objects.all()
    return render(request, "stokes/index.html",{
        "new_products": new_products,
        "brands": brands
    })


def beers(request):
    brands = Brand.objects.all()
    return render(request, "stokes/beers.html",{
        "brands": brands
    })


def about(request):
    return render(request, "stokes/about.html")


def contact(request):
    if (request.method == "POST"):
        Name = request.POST.get("name")
        Number = request.POST.get("number")
        Email = request.POST.get("email")
        Subject = request.POST.get("subject")
        Mesg = request.POST.get("message")

        Msg = message()

        Msg.Name = Name
        Msg.Phone_Number = Number
        Msg.Email = Email
        Msg.Subject = Subject
        Msg.Message = Mesg

        Msg.save()

        return render(request, "stokes/contact.html", {
            "message": "Message sent!"
        })

    return render(request, "stokes/contact.html")


def jobs(request):
    if (request.method == "POST"):

        s3 = boto3.resource(
        's3',
        aws_access_key_id=os.environ['S3_KEY'],
        aws_secret_access_key=os.environ['S3_SECRET'],
        )
        bucket = s3.Bucket('django-project-stokes')
        

        Position = request.POST.get("position")
        Name = request.POST.get("name")
        Number = request.POST.get("number")
        Email = request.POST.get("email")
        Resume = request.FILES['resume']

        applicant = application()

        if (application.objects.filter(Email = Email, Job_Title = Position).exists()):

            app = application.objects.get(Email = Email, Job_Title = Position)
            app.Name = Name
            app.Resume = Resume
            app.Phone_Number = Number

            app.save()

        else:
            
            applicant.Name = Name
            applicant.Job_Title = Position
            applicant.Resume = Resume
            applicant.Phone_Number = Number
            applicant.Email = Email
            applicant.save()

        applicant_resume = application.objects.filter(Email = Email, Job_Title = Position)
        applicant_resume = applicant_resume.get()
        
        obj = bucket.Object(f'media/{applicant_resume.Resume.name}')
        
        obj.download_file(f'{Name}-Resume.pdf')
            
        email = EmailMessage(
        f'Application recieved for {Position}',
        f"Name: {Name}\nPosition: {Position}\nPhone Number: {Number}\nEmail: {Email}",
        'doug@douglasmumme.com',
        ['doug@douglasmumme.com']
        )
        
        email.attach_file(Path(f'{Name}-Resume.pdf'))
        email.send()

        os.remove(f'{Name}-Resume.pdf')


        return render(request, "stokes/jobs.html", {
            "message": "Application submitted!"
        })

        

    return render(request, "stokes/jobs.html")


def events(request):

    events = Event.objects.all()
    return render(request, "stokes/events.html", {
        "events": events,
        "first_range": range(0,len(events) + 1, 3),
        "second_range": range(len(events))
    })

def product_finder(request):
    
    return render(request, "stokes/product_finder.html")

def online_order(request):

    return render(request, "stokes/online_order.html")