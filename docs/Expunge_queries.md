# Expunge_queries


```sql
delete from asset.Machine where cust = 'EXL_Testing';
select * from asset.AssetData A join asset.Machine M on A.machineid = M.machineid where M.cust = 'EXL_Testing';
delete from event.Events where customer = 'EXL_Testing';
delete from swupdate.UpdateMachines where sitename = 'EXL_Testing';
select * from softinst.Machine M join core.Census C on M.id = C.id where site = 'EXL_Testing';
select * from softinst.PatchStatus M join core.Census C on M.id = C.id where site = 'EXL_Testing';
select *  from core.MachineGroupMap  M left join core.Census C on (M.censusuniq = C.censusuniq) where site = 'EXL_Testing';
select *  from core.MachineGroups  M left join core.Census C on (M.mgroupuniq = C.censusuniq) where site = 'EXL_Testing';
select *  from core.ValueMap  M left join core.Census C on (M.censusuniq = C.censusuniq) where site = 'EXL_Testing';
delete from core.Census where site = 'EXL_Testing';
delete from core.CensusPerm where site = 'EXL_Testing';
```
