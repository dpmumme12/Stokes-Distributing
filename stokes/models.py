from django.db import models

# Create your models here.

class New_Product(models.Model):
    Title = models.CharField(max_length = 50, blank=True, null=True)
    Image = models.ImageField(upload_to='myimages')

    def __str__(self):
        return self.Title

class application(models.Model):
    Name = models.CharField(max_length = 50)
    Job_Title = models.CharField(max_length = 20)
    Phone_Number = models.CharField(max_length = 20, default = "None")
    Email = models.CharField(max_length = 50, default = "None")
    Resume = models.FileField(upload_to = 'resumes')
    Submitted = models.DateTimeField(auto_now_add = True, blank = True)
    Viewed = models.BooleanField(default = False)

    def __str__(self):
        return self.Name

class Event(models.Model):
    Title = models.CharField(max_length = 60)
    Image = models.ImageField(upload_to ='myimages')
    Start_Time = models.CharField(max_length = 15)
    End_time = models.CharField(max_length = 15)
    Date = models.CharField(max_length = 50)
    Location = models.CharField(max_length = 70)
    Description = models.TextField()

    def __str__(self):
        return self.Title

class message(models.Model):
    Name = models.CharField(max_length = 50)
    Phone_Number = models.CharField(max_length = 20, default = "None")
    Email = models.CharField(max_length = 50, default = "None")
    Subject = models.CharField(max_length = 50)
    Message = models.TextField()

    def __str__(self):
        return self.Name

class Brand(models.Model):
    Name = models.CharField(max_length = 50)
    Image = models.ImageField(upload_to="myimages")
    Brands_Website = models.CharField(max_length = 100, default="#")

    def __str__(self):
        return self.Name