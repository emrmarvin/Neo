export AZURE_REGISTRY=projectneo.azurecr.io
docker-compose run neoweb python manage.py collecstatic
docker-compose run neoweb python manage.py migrate


