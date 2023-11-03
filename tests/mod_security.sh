#!/bin/bash

# Test for modsecurity /getMachinewise

STATUS=$(curl \
  --write-out '%{http_code}' \
  --location -H "Authorization: apiKey 7cVDWy8AexSbmyeCNgiSIi:2HOU19RpTBvgWvb8P12N4l" \
  --request GET "https://$TEST_SERVER_HOST_NAME/Dashboard/api/profile/getMachinewise" \
  --data-raw '{"username":"10072255"}')

if [[ "$STATUS" == "[]200" ]]; then
  echo "PASS - Test for modsecurity /getMachinewise, finished with $STATUS status code"
else
  echo "FAIL - Test for modsecurity /getMachinewise, finished with $STATUS status code"
  exit 1
fi

# Test for modsecurity upload core DB

STATUS=$(
  curl \
    --write-out '%{http_code}' \
    -H 'content-type: multipart/form-data' \
    -F "core-file=@tests/core.dbn" \
    -F "core-file=function=uploadCoreDb" \
    --request POST "https://$TEST_SERVER_HOST_NAME/Dashboard/softwareupdate/softwarefunctions.php?vid=123"
)

statusMessage=$(echo $STATUS | grep "You do not have one of thees roles" | wc -l)

if [[ "$statusMessage" == "1" ]]; then
  echo "PASS - Test for modsecurity upload core DB, finished with statusMessage=$statusMessage STATUS=$STATUS status code"
else
  echo "FAIL - Test for modsecurity upload core DB, finished with statusMessage=$statusMessage STATUS=$STATUS status code"
  exit 1
fi

# https://staging.nanoheal.work/Dashboard/softwareupdate/softwarefunctions.php
# core-file: (binary)
# csrfMagicToken: 674b4625cd1889b3e58d4127e8947881b1c7dff9
# csrfMagicToken: 674b4625cd1889b3e58d4127e8947881b1c7dff9
# function: uploadCoreDb
