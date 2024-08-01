from django.contrib import admin
from django.urls import path, reverse
from django.utils.html import format_html
from django.http import HttpResponse, Http404
from .forms import BrandForm, EventImageForm, NewProductForm
from .models import Application, ApplicationFile, Brand, Event, EventImage, Message, NewProduct


class ApplicationAdmin(admin.ModelAdmin):
    list_display = ('name', 'job_title', 'submitted', 'viewed', 'download_application_file')
    search_fields = ('name',)
    readonly_fields = ('name', 'job_title', 'phone_number', 'email',
                       'submitted', 'download_application_file')

    filter_horizontal = ()
    list_filter = ('job_title',)
    fieldsets = ()
    ordering = ('name',)

    def download_application_file(self, obj):
        try:
            application_file = obj.applicationfile
            if application_file.binary_data:
                return format_html('<a href="{}">Download</a>',
                                   reverse('admin:download_application_file',
                                           args=[application_file.pk]))
            return "No file"
        except ApplicationFile.DoesNotExist:
            return "No file"

    download_application_file.short_description = 'Application File'

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('download_application_file/<int:pk>/',
                 self.admin_site.admin_view(self.download_view), name='download_application_file'),
        ]
        return custom_urls + urls

    def download_view(self, request, pk):
        try:
            application_file = ApplicationFile.objects.get(pk=pk)
            if not application_file.binary_data:
                raise Http404
            response = HttpResponse(application_file.binary_data,
                                    content_type='application/octet-stream')
            response['Content-Disposition'] = f'attachment; filename={application_file.filename}'
            return response
        except ApplicationFile.DoesNotExist:
            raise Http404("No file found.")


class BrandAdmin(admin.ModelAdmin):
    form = BrandForm


class EventImageInline(admin.StackedInline):
    model = EventImage
    form = EventImageForm
    can_delete = False


class EventAdmin(admin.ModelAdmin):
    inlines = [EventImageInline]


class MessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'subject', 'phone_number')
    search_fields = ()
    readonly_fields = ('name', 'subject', 'phone_number', 'email', 'message')

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()
    ordering = ()


class NewProductAdmin(admin.ModelAdmin):
    form = NewProductForm


admin.site.register(Application, ApplicationAdmin)
admin.site.register(Brand, BrandAdmin)
admin.site.register(Event, EventAdmin)
admin.site.register(Message, MessageAdmin)
admin.site.register(NewProduct, NewProductAdmin)
