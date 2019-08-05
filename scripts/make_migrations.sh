#!/usr/bin/env bash

docker-compose run server python manage.py makemigrations accounts -v 3
docker-compose run server python manage.py makemigrations api -v 3
