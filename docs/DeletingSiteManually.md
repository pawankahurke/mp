# Deleting Site Manually

```sql
select * from core.Customers where customer in ('MOCKUP_TEST' , 'NH_Licensing_Testing' , 'zzzzzzzzz_Dummy Site','Divya_Testing' );
select * from install.Customers  where customer_name in ('MOCKUP_TEST' , 'NH_Licensing_Testing' , 'zzzzzzzzz_Dummy Site','Divya_Testing' );
select * from install.Sites where sitename in ('MOCKUP_TEST' , 'NH_Licensing_Testing' , 'zzzzzzzzz_Dummy Site','Divya_Testing' );
select * from core.Census where site in ('MOCKUP_TEST' , 'NH_Licensing_Testing' , 'zzzzzzzzz_Dummy Site','Divya_Testing' );
```
