from .settings import *
import os

DEBUG = False
ALLOWED_HOSTS = ['.azurewebsites.net', '127.0.0.1']

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