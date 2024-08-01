import base64
from django.db import models


class Application(models.Model):
    name = models.CharField(max_length=50, blank=True)
    job_title = models.CharField(max_length=20, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.CharField(max_length=50, blank=True)
    submitted = models.DateTimeField(auto_now_add=True, blank=True)
    viewed = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class ApplicationFile(models.Model):
    application = models.OneToOneField(Application, on_delete=models.CASCADE, primary_key=True)
    binary_data = models.BinaryField(blank=True, null=True, editable=True)
    content_type = models.CharField(max_length=100)
    filename = models.CharField(max_length=150, blank=True)


class Brand(models.Model):
    name = models.CharField(max_length=50)
    brands_website = models.CharField(max_length=100, default="")
    image = models.BinaryField(blank=True, null=True, editable=True)
    content_type = models.CharField(max_length=100)
    filename = models.CharField(max_length=150, blank=True)

    def image_as_base64(self):
        if self.image:
            base64_data = base64.b64encode(self.image).decode('utf-8')
            return f'data:{self.content_type};base64,{base64_data}'
        return None

    def __str__(self):
        return self.name


class Event(models.Model):
    title = models.CharField(max_length=60)
    start_time = models.CharField(max_length=15)
    end_time = models.CharField(max_length=15)
    date = models.CharField(max_length=50)
    location = models.CharField(max_length=70, blank=True)
    link_url = models.CharField(max_length=500, blank=True)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.title


class EventImage(models.Model):
    event = models.OneToOneField(Event, on_delete=models.CASCADE, primary_key=True)
    binary_data = models.BinaryField(blank=True, null=True, editable=True)
    content_type = models.CharField(max_length=100)
    filename = models.CharField(max_length=150, blank=True)

    def binary_data_as_base64(self):
        if self.binary_data:
            base64_data = base64.b64encode(self.binary_data).decode('utf-8')
            return f'data:{self.content_type};base64,{base64_data}'
        return None


class Message(models.Model):
    name = models.CharField(max_length=50, blank=True)
    phone_number = models.CharField(max_length=20, blank=True)
    email = models.CharField(max_length=50, blank=True)
    subject = models.CharField(max_length=50, blank=True)
    message = models.TextField()

    def __str__(self):
        return self.name


class NewProduct(models.Model):
    title = models.CharField(max_length=50, blank=True)
    image = models.BinaryField(blank=True, null=True, editable=True)
    content_type = models.CharField(max_length=100)
    filename = models.CharField(max_length=150, blank=True)

    def image_as_base64(self):
        if self.image:
            base64_data = base64.b64encode(self.image).decode('utf-8')
            return f'data:{self.content_type};base64,{base64_data}'
        return None

    def __str__(self):
        return self.title
