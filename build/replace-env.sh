#!/bin/bash

env | grep "max_children"

mportal_session_save_handler="files"

if [[ $mportal_session_save_handler = "redis" ]]; then
  mportal_session_save_handler="tcp://$REDIS_HOST:$REDIS_PORT?auth=$REDIS_PASSWORD"
fi

printf "mportal_session_save_handler = $mportal_session_save_handler\n"

set -e
eval "cat <<EOF
$(cat /etc/php-fpm.d/www.conf)
EOF
" >/etc/php-fpm.d/www.conf

# replace env values in nginx conf

if [[ $MODSECURITY = "on" ]] || [[ $MODSECURITY = "off" ]]; then
  sed -i -e "s/\${MODSECURITY:=on}/$MODSECURITY/g" /etc/nginx/nginx.conf
  printf "MODSECURITY = $MODSECURITY\n"
else
  printf "MODSECURITY = on\n"
  sed -i -e "s/\${MODSECURITY:=on}/on/g" /etc/nginx/nginx.conf
fi

printf "replace env - ok\n"
