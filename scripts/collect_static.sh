#!/usr/bin/env bash

docker-compose run server python manage.py collectstatic
