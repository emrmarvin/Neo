#!/bin/bash
# source ./venv/Scripts/activate

python manage.py collectstatic
python manage.py makemigrations    
python manage.py migrate

# case $1 in
#   dev)
#     python manage.py migrate
#     python manage.py runserver --settings=backend.settings.dev
#     ;;
#   prod)
#   	python manage.py collectstatic --noinput
#     python manage.py makemigrations    
#     python manage.py migrate
#     python manage.py runserver 80:8000 --settings=backend.settings.prod
#     ;;
# esac
