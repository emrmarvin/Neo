# NOTICE:
# Vue app will only detect VUE_APP_* envs
#/usr/bin/env

# Django
export DEBUG=False
export SECRET_KEY='nh63*3c!n@x2-um)#bdjk%5oej^+$b$3#!6ib2zn9)=m&yb^8-'

export DOMAIN='https://finalcontrol-contacts-stg.azurewebsites.net/'

export ALLOWED_HOSTS=['https://finalcontrol-contacts-stg.azurewebsites.net','https://finalcontrol-contacts.azurewebsites.net/', 127.0.0.1]

# Email settings, defaults to 1025 and mailhog
#EMAIL_PORT=25
#EMAIL_HOST=localhost

# PostgreSQL
export POSTGRES_HOST=neo-prod.postgres.database.azure.com
export POSTGRES_DB=contactdbstg
export POSTGRES_PASSWORD=@NeoManager
export POSTGRES_USER=neomanager@neo-prod
export POSTGRES_PORT=5432


# Google Analytics
#VUE_APP_GOOGLE_ANALYTICS=UA-XXXXXXXXX-X
