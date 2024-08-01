from django.shortcuts import render
from django.core.mail import EmailMessage
from django.conf import settings
from .models import Application, ApplicationFile, Brand, Event, Message, NewProduct


def index(request):
    new_products = NewProduct.objects.all()
    brands = Brand.objects.all()

    return render(request, "stokes/index.html", {
        "new_products": new_products,
        "brands": brands
    })


def beers(request):
    brands = Brand.objects.all()
    return render(request, "stokes/beers.html", {
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

        Msg = Message()

        Msg.name = Name
        Msg.phone_number = Number
        Msg.email = Email
        Msg.subject = Subject
        Msg.message = Mesg

        Msg.save()

        return render(request, "stokes/contact.html", {
            "message": "Message sent!"
        })

    return render(request, "stokes/contact.html")


def jobs(request):
    if (request.method == "POST"):

        position = request.POST.get("position")
        name = request.POST.get("name")
        number = request.POST.get("number")
        email = request.POST.get("email")
        resume = request.FILES['resume'].read()
        content_type = request.FILES['resume'].content_type
        file_name = f'{name}-resume.pdf'

        if (Application.objects.filter(email=email, job_title=position).exists()):
            app = Application.objects.select_related('applicationfile').get(email=email,
                                                                            job_title=position)
            app.name = name
            app.phone_number = number
            app.save()
            if hasattr(app, 'applicationfile'):
                app.applicationfile.binary_data = resume
                app.applicationfile.content_type = content_type
                app.applicationfile.file_name = file_name
                app.applicationfile.save()
            else:
                ApplicationFile(application=app, binary_data=resume,
                                content_type=content_type, filename=file_name).save()
        else:
            application = Application()
            application.name = name
            application.job_title = position
            application.phone_number = number
            application.email = email
            application.save()
            ApplicationFile(application=application, binary_data=resume,
                            content_type=content_type, filename=file_name).save()

        subject = f'Application recieved from {name}'
        body = f"Name: {name}\nPosition:{position}\nPhone Number: {number}\nEmail: {email}"
        from_email = settings.EMAIL_HOST_USER
        to_email = settings.DEFAULT_TO_EMAIL
        # Create the email
        email = EmailMessage(subject, body, from_email, to_email)

        # Attach the binary data
        email.attach(file_name, resume, content_type)

        # Send the email
        email.send()

        return render(request, "stokes/jobs.html", {
            "message": "Application submitted!"
        })

    return render(request, "stokes/jobs.html")


def events(request):
    events = Event.objects.select_related('eventimage').all()
    return render(request, "stokes/events.html", {
        "events": events,
        "first_range": range(0, len(events) + 1, 3),
        "second_range": range(len(events))
    })


def product_finder(request):
    return render(request, "stokes/product_finder.html")
