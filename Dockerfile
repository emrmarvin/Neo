FROM python:3.7

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/app

COPY ./requirements.txt .

RUN pip install -r requirements.txt

# EXPOSE port to be used
COPY . .
RUN python manage.py collectstatic --noinput

# Set command to run as soon as container is up
CMD gunicorn --bind 0.0.0.0:8080 backend.wsgi:application