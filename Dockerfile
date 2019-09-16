FROM python:3.7
LABEL Maintainer="Marvin Villanueva"
ENV PYTHONUNBUFFERED 1
COPY . /usr/src
COPY ./gunicorn.conf /etc/init/
WORKDIR /usr/src
RUN pip install -r requirements.txt
EXPOSE 8000

CMD ["pyhon", "manage.py", "runserver", "--settings=backend.settings.prod"]