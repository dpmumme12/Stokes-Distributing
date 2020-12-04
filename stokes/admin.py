from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import New_Product, application, Event, message, Brand

# Register your models here.

class applicationAdmin(admin.ModelAdmin):
    list_display = ('Name', 'Job_Title', 'Submitted', 'Resume', 'Viewed')
    search_fields = ('Name',)
    readonly_fields = ('Name', 'Job_Title', 'Phone_Number', 'Email', 'Submitted', 'Resume')

    filter_horizontal =  ()
    list_filter = ('Job_Title',)
    fieldsets = ()
    ordering = ('Name',)

class messageAdmin(admin.ModelAdmin):
    list_display = ('Name', 'Subject', 'Phone_Number')
    search_fields = ()
    readonly_fields = ('Name', 'Subject', 'Phone_Number', 'Email', 'Message')

    filter_horizontal =  ()
    list_filter = ()
    fieldsets = ()
    ordering = ()

admin.site.register(New_Product)
admin.site.register(Event)
admin.site.register(Brand)
admin.site.register(application, applicationAdmin)
admin.site.register(message, messageAdmin)