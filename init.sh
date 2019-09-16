#!/bin/bash
-e

#CMD ["gunicorn",  "--bind", "8000:8000", "backend.wsgi:application"]

gunicorn -b 0.0.0.0:8000 backend.wsgi:application