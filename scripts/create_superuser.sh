#!/usr/bin/env bash

command=
docker-compose run server python manage.py shell -c "from accounts.models import User; User.objects.create_superuser('admin@example.com', 'admin', 'admin')"
