#!/usr/bin/env bash

# Ubuntu links
mkdir -p /etc/php/7.4/fpm/pool.d
ln -sf /etc/php-fpm.d/www.conf /etc/php/7.4/fpm/pool.d/www.conf

mkdir -p /etc/php/8.1/fpm/pool.d
ln -sf /etc/php-fpm.d/www.conf /etc/php/8.1/fpm/php-fpm.conf

mkdir -p /var/lib/php/session
chmod -R 777 /var/lib/php/session

printf "set links - ok\n"

chmod +x /app/replace-env.sh
/app/replace-env.sh

mkdir -p /run/php
mkdir -p /home/nanoheal/setups/live/
# touch /var/www/html/error.log

chmod -R 777 /run/php
chmod -R 777 /home/nanoheal/
chmod -R 777 /var/www/html/Dashboard/config.php
# chmod -R 777 /var/www/html/error.log

php-fpm

printf "php-fpm - ok\n"

#rm -rf /var/www/html/error.log

printf "starting nginx...\n"

nginx

# tail --pid $$ -F /var/www/html/error.log &

redis-server
