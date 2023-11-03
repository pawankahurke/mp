# Doc for bulk expunging of devices scripts

## Manual deleting

go to

https://xxx.nanoheal.work/Dashboard/admin/expunge_machines.php

then all devices will are deleted if them not reported more then 2 months (by default)

## From excel file

go to 

https://xxx.nanoheal.work/visualization/#/uploadfiles

upload Excel file to "expunge" folder

login to mportal and go to:

https://xxx.nanoheal.work/Dashboard/admin/expunge_machines_excel.php?fileName=FILE_NAME

replace "FILE_NAME" to Excel file name which you uploaded (like Accenture_Testing_Site_Details.xls)


## Cron job

for cron job just should to set ENV variable "CRON_EXPUNGE_SCRIPT" to the any date

for example: if we set CRON_EXPUNGE_SCRIPT = "-4 month", then all device which not reported more then 4 months will be deleted

## Logs

all logs from these 3 scripts contains in:

https://xxx.nanoheal.work/Dashboard/admin/expunge_GENERIC_15-09-2022_log.txt

instead of 15-09-2022 we can input any other date
