from .settings import *

DEBUG = True
ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

MIDDLEWARE.append('debug_toolbar.middleware.DebugToolbarMiddleware')
INSTALLED_APPS.append('debug_toolbar')
INTERNAL_IPS = ('127.0.0.1', 'localhost')

CORS_ORIGIN_WHITELIST = [
    "http://locahost:8080",
    "http://localhost:8000",
]

CORS_ORIGIN_ALLOW_ALL = True

WEBPACK_LOADER = {
    'DEFAULT': {
        'BUNDLE_DIR_NAME': '',
        'STATS_FILE': os.path.join(BASE_DIR, 'frontend/webpack-stats.json'),
    }
}

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, "staticfiles/"),
]

MEDIA_URL = '/dmedia/'
MEDIA_ROOT = os.path.join(BASE_DIR, "mediafiles")

STATIC_ROOT = './static/'
STATIC_URL = os.path.join(BASE_DIR, "staticfiles/")

VUE_ROOT = os.path.join(BASE_DIR, "frontend\\static\\")