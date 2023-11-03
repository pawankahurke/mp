# ExportReportManual-Automation

```sql
-- Selfhelp
SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.sequencename',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.sequence') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.totaldurationofsequence_seconds') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Consumer%'  and servertime >1627814802 and clientversion ='4.000.000.0116.36' ;

  SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Consumer%'  and servertime >1627814802 and clientversion ='4.000.000.0129.36';

 SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Consumer%'  and servertime >1627814802 and clientversion ='4.000.000.0132.36' ;



  SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Consumer%'  and servertime >1627814802 and clientversion ='4.000.000.0135.36' ;



-- schedule
SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.sequencename',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.sequence') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.totaldurationofsequence_seconds') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Scheduled%'  and servertime > 1627814802 and clientversion ='4.000.000.0116.36';

SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Scheduled%'  and servertime > 1627814802 and clientversion ='4.000.000.0129.36';

SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Scheduled%'  and servertime > 1627814802 and clientversion ='4.000.000.0132.36';


  SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Scheduled%'  and servertime > 1627814802 and clientversion ='4.000.000.0135.36';


-- Practive
SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.sequencename',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.sequence') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.totaldurationofsequence_seconds') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Agent%'  and servertime > 1627814802 and clientversion ='4.000.000.0116.36';

SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Agent%'  and servertime > 1627814802 and clientversion ='4.000.000.0129.36';

SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Agent%'  and servertime > 1627814802 and clientversion ='4.000.000.0132.36';

  SELECT idx,servertime as stime,
  customer,machine,username,ctime as cltime,
  cast((REPLACE(REPLACE(text1->>'$.seqName',']',''),'[','')) as CHAR) AS 'tilename',
  cast((text1->>'$.seq') AS CHAR) AS 'statusText',
  cast((string1->>'$.log') AS CHAR) AS 'executedBy',
  CONV(SUBSTRING(CAST(SHA(CONCAT(json_keys(text1))) AS CHAR), 1, 16), 16, 10) as keylist,
  cast(SUBSTRING_INDEX(text2->>'$.log',':',-1) as CHAR) as 'log',
  cast((text1->>'$.seqDurationSec') as unsigned integer) AS 'duration',
  clientversion as clientversion
  from  event.Events
  where scrip = 286 and text2->>'$.log' like '%Agent%'  and servertime > 1627814802 and clientversion ='4.000.000.0135.36';
```
