- Initiate the cron Job
https://elftouch-niit.nanoheal.com/Dashboard/cron/c-insertqueries.php
- Hardware
https://scccpcl.service-now.com/api/sccp3/cmdb_integration/elftouch_hardwares
- Software
https://scccpcl.service-now.com/api/sccp3/cmdb_integration/elftouch_softwares

How to check the entries for H/w and S/W sync:

```
H/W - select * from asset.cmdbHardwareData
S/W - select * from asset.cmdbSoftwareData
```

```
* 7 * * tue /usr/bin/curl https://elftouch-niit.nanoheal.com/Dashboard/cron/c-insertqueries.php >/dev/null 2>&1
* 7,8,9,10 * * wed /usr/bin/curl https://elftouch-niit.nanoheal.com/Dashboard/cron/c-cmdbHardwarePush.php >/dev/null 2>&1
* 7,8,9,10  * * thur  /usr/bin/curl https://elftouch-niit.nanoheal.com/Dashboard/cron/c-cmdbSoftwarePush.php >/dev/null 2>&1
```
