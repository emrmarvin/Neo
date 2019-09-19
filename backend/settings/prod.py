from .settings import *
import os

DEBUG = False
<<<<<<< HEAD
ALLOWED_HOSTS = [os.environ['WEBSITE_SITE_NAME'] + '.azurewebsites.net', '127.0.0.1'] if 'WEBSITE_SITE_NAME' in os.environ else []
=======
ALLOWED_HOSTS = ['.azurewebsites.net', '127.0.0.1']
>>>>>>> davao

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend/webpack-stats-prod.json'),
    }
}

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "staticfiles"),
]


MEDIA_URL = '/dmedia/'
MEDIA_ROOT = os.path.join(BASE_DIR, "mediafiles")

STATIC_ROOT = './static/'
STATIC_URL = os.path.join(BASE_DIR, "staticfiles/")

VUE_ROOT = os.path.join(BASE_DIR, "frontend\\dist\\")