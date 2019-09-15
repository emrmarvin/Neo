# NOTICE:
# Vue app will only detect VUE_APP_* envs
#/usr/bin/env

# Django
export DEBUG=False
export SECRET_KEY='nh63*3c!n@x2-um)#bdjk%5oej^+$b$3#!6ib2zn9)=m&yb^8-'

export DOMAIN='https://finalcontrolcontacts-staging.azurewebsites.net'

export ALLOWED_HOSTS=['https://finalcontrolcontacts-staging.azurewebsites.net']

# Email settings, defaults to 1025 and mailhog
#EMAIL_PORT=25
#EMAIL_HOST=localhost

# PostgreSQL
export POSTGRES_HOST=neo-prod.postgres.database.azure.com
export POSTGRES_DB=contactdbstg
export POSTGRES_PASSWORD=@NeoManager
export POSTGRES_USER=neomanager@neo-prod


# Google Analytics
#VUE_APP_GOOGLE_ANALYTICS=UA-XXXXXXXXX-X
