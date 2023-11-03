# LicenseExpungeDoc

Check Count in Dashboard MYSQL for count in Sites:
```sql
QUERY 1 - select count(\*),site from core.Census group by site;
```

Pick SiteId from Sites table from Licensing MYSQL:

```sql
select sitename,siteid from Sites ;
```

Fetch Data using the siteid from above query and use below:

```sql
select siteemailid, numinstalls from Siteemail where siteid = 3;
update Siteemail set  numinstalls = ? where siteemailid = 3;
```

? - This count should be same as that obtained from QUERY 1 for the site selected.
