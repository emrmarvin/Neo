from .settings import *

DEBUG = False
ALLOWED_HOSTS = ['*']

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'webpack_loader',
    'tasks',
    'graphene_django',
    'corsheaders',
    'Apps.Address.country',
    'Apps.Address.state_province',
    'Apps.Address.county',
    'Apps.Address.city',
    'Apps.Address.zip_code',
    'Apps.Address',
    'Apps.Plants.plant_contact_type',
    'Apps.Plants.plant_contacts',
    'Apps.Plants.plant_functions',
    'Apps.Plants.plant_information',
    'Apps.Plants.plant_location',
    'Apps.Plants.Plant_Certificates',
    'Apps.business_group',
    'Apps.business_platform',
    'Apps.business_unit',
    'Apps.brands',
    'Apps.products',
    'Apps.products_item', 
    'Apps.Certificates',    
    'Apps.Plants',
    'Apps.brand_product_category',
    'Apps.Plants.plant_brands'
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ['POSTGRES_DB'],
        'HOST': os.environ['POSTGRES_HOST'],
        'USER': os.environ['POSTGRES_USER'],
        'PASSWORD': os.environ['POSTGRES_PASSWORD']
    }
}

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend/webpack-stats-prod.json'),
    }
}

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "static"),
]


MEDIA_URL = '/dmedia/'
MEDIA_ROOT = os.path.join(BASE_DIR, "mediafiles")

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, "staticfiles")

VUE_ROOT = os.path.join(BASE_DIR, "frontend\\dist\\")