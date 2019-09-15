#!/bin/bash
source venv/Scripts/activate
source ./env.sh
case $1 in
  dev)
    python manage.py migrate
    python manage.py runserver --settings=backend.settings.dev
    ;;
  prod)    
  	python manage.py collectstatic --noinput
    python manage.py makemigrations    
    python manage.py migrate
    python manage.py runserver 0000:8000 --settings=backend.settings.prod
    ;;
esac