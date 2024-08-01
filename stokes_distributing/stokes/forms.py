from django import forms
from django.core.files.uploadedfile import InMemoryUploadedFile
from .models import Brand, EventImage, NewProduct


class NoInput(forms.Widget):
    input_type = "hidden"
    template_name = ""

    def render(self, name, value, attrs=None, renderer=None):
        return ""


class BrandForm(forms.ModelForm):
    image = forms.ImageField(required=False)
    filename = forms.CharField(required=False, widget=NoInput)
    content_type = forms.CharField(required=False, widget=NoInput)

    class Meta:
        model = Brand
        fields = ['name', 'brands_website', 'image', 'filename', 'content_type']

    def __init__(self, *args, **kwargs):
        super(BrandForm, self).__init__(*args, **kwargs)
        if self.instance and self.instance.image:
            base64_image = self.instance.image_as_base64()
            self.fields['image'].widget = forms.ClearableFileInput(attrs={
                'data-preview': base64_image}
            )
            self.fields['image'].help_text = (
                f'''<img src="{base64_image}" alt="Current image"
                    style="width: auto; height: 150px;" /><br>'''
            )

    def clean(self):
        cleaned_data = super().clean()
        uploaded_file = cleaned_data.get('image')

        if isinstance(uploaded_file, InMemoryUploadedFile):
            cleaned_data['image'] = uploaded_file.read()
            cleaned_data['content_type'] = uploaded_file.content_type
            cleaned_data['filename'] = uploaded_file.name
        elif self.instance.pk and not isinstance(uploaded_file, InMemoryUploadedFile):
            cleaned_data['image'] = self.instance.image
            cleaned_data['content_type'] = self.instance.content_type
            cleaned_data['filename'] = self.instance.filename

        return cleaned_data


class EventImageForm(forms.ModelForm):
    binary_data = forms.ImageField(required=False, label='Image')
    filename = forms.CharField(required=False, widget=NoInput)
    content_type = forms.CharField(required=False, widget=NoInput)

    class Meta:
        model = EventImage
        fields = ['binary_data', 'filename', 'content_type']

    def __init__(self, *args, **kwargs):
        super(EventImageForm, self).__init__(*args, **kwargs)
        if self.instance and self.instance.binary_data:
            base64_image = self.instance.binary_data_as_base64()
            self.fields['binary_data'].widget = forms.ClearableFileInput(attrs={
                'data-preview': base64_image}
            )
            self.fields['binary_data'].help_text = (
                f'''<img src="{base64_image}" alt="Current image"
                    style="width: auto; height: 150px;" /><br>'''
            )

    def clean(self):
        cleaned_data = super().clean()
        uploaded_file = cleaned_data.get('binary_data')

        if uploaded_file:
            cleaned_data['binary_data'] = uploaded_file.read()
            cleaned_data['content_type'] = uploaded_file.content_type
            cleaned_data['filename'] = uploaded_file.name

        return cleaned_data


class NewProductForm(forms.ModelForm):
    image = forms.ImageField(required=False)
    filename = forms.CharField(required=False, widget=NoInput)
    content_type = forms.CharField(required=False, widget=NoInput)

    class Meta:
        model = NewProduct
        fields = ['title', 'image', 'filename', 'content_type']

    def __init__(self, *args, **kwargs):
        super(NewProductForm, self).__init__(*args, **kwargs)
        if self.instance and self.instance.image:
            base64_image = self.instance.image_as_base64()
            self.fields['image'].widget = forms.ClearableFileInput(attrs={
                'data-preview': base64_image}
            )
            self.fields['image'].help_text = (
                f'''<img src="{base64_image}" alt="Current image"
                    style="width: auto; height: 150px;" /><br>'''
            )

    def clean(self):
        cleaned_data = super().clean()
        uploaded_file = cleaned_data.get('image')

        if isinstance(uploaded_file, InMemoryUploadedFile):
            cleaned_data['image'] = uploaded_file.read()
            cleaned_data['content_type'] = uploaded_file.content_type
            cleaned_data['filename'] = uploaded_file.name
        elif self.instance.pk and not isinstance(uploaded_file, InMemoryUploadedFile):
            cleaned_data['image'] = self.instance.image
            cleaned_data['content_type'] = self.instance.content_type
            cleaned_data['filename'] = self.instance.filename

        return cleaned_data
