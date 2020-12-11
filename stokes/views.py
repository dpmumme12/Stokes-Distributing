from django.shortcuts import render
from django.http import HttpResponse
from .models import application, Event, message, Brand, New_Product


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
        Position = request.POST.get("position")
        Name = request.POST.get("name")
        Number = request.POST.get("number")
        Email = request.POST.get("email")
        Resume = request.FILES['resume']


        applicant = application()
        applicant.Name = Name
        applicant.Job_Title = Position
        applicant.Resume = Resume
        applicant.Phone_Number = Number
        applicant.Email = Email
        applicant.save()

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