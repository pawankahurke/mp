# USERS

The module is used to create new users, update the already existing ones
and delete the existing users.
```
JS FILE: Dashboard/js/customer/users.js

UI FILE: Dashboard/customer/user_html.php
```
  ------------------- ---------------------------------------------------
  JS Function         Dashboard/js/customer/users.js/user_datatable

  PHP/API Call        Dashboard/lib/l-custajax.php/CUSAJX_UserGridData

  Type                POST

  Conditions required token
  to satisfy the call 

  Success Response    Return array with all details

  Failure Response    Return empty array
  -------------------
  ---------------------------------------------------                                           
 
  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Fetch Data using the rolename</td>
<td>core.Users </td>
<td>All </td>
</tr>
</tbody>
</table>

------------------------------

```
The module has following components:

1.  Add User

2.  Edit User

3.  Delete User

4.  Resend Mail

5.  Reset Password

6.  Export To Excel
```
------------------------------
```
1.  ADD USER:

    This component allows to add a new user provided the following
    information:

-   First Name

-   Last Name

-   Email address

-   Sites

-   User Role

-   Time Zone

-   Security

    Checks if the user is already there with same information, then
    return "Duplicate" else will create a new user.
```
------------------------------

<table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td></td>
</tr>
<tr class="even">
<td>JS Function</td>
<td><p>Onclick of id “addAdvUser” </p>
</tr>
<tr class="odd">
<td>PHP/API Call</td>
<td>/lib/l-custAjax.php/CUSAJX_CreateUser</td>
</tr>
<tr class="even">
<td>Conditions required to satisfy the call</td>
<td>userEmail,userName,lastname,userRole,userlevel,userCustomer,language': language,agentRoleName,sectype,timezone, token</td>
</tr>
<tr class="odd">
<td>Success Response</td>
<td><p>User ‘agentName' Added Successfully.</p>
<p>Confirmation email has been sent to the created user.</p></td>
</tr>
<tr class="even">
<td>Failure Response</td>
<td><p>1. “DUPLICATE” -</p>
<p>There is already a user with the same details</p>
<p>2. “Failure” -</p>
<p>Email has not been sent. Please try again</p>
</td>
</tr>
</tbody>
</table>

------------------------------

  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Fetch Data </td>
<td>core.Users </td>
<td>userid,username</td>
</tr>
<tr class="even">
<td>Fetch Data </td>
<td>core.Users_cksum</td>
<td>id</td>
</tr>
<tr class="odd">
<td>Inserting Data</td>
<td>core.Users</td>
<td>ch_id,entity_id,channel_id,subch_id,customer_id,role_id,original_role_id,username,firstName,lastName, password,user_email,user_phone_no,user_priv, notify_mail, report_mail, priv_admin, priv_notify, priv_report, priv_areport, priv_search, priv_aquery, priv_downloads, priv_updates, priv_config, priv_asset, priv_debug, priv_restrict, priv_provis, priv_audit, priv_csrv, filtersites, logo_file, logo_x, logo_y, footer_left, footer_right, revusers, cksum, asset_report_sender, disable_cache, event_notify_sender, event_report_sender, jpeg_quality, meter_report_sender, rept_css,userKey, parent_id,securityType,mfaEnabled,timezone</td>
</tr>
<tr class="even">
<td>Inserting Data</td>
<td>core.Users_cksum</td>
<td>username,level,cksum</td>
</tr>
<tr class="odd">
<td>Inserting Data</td>
<td>core.AuditLog</td>
<td>module,action,username,userid,useremail,url,method,ip,agent,status,rawReference,refName,created</td>
</tr>
</tbody>
</table>                                
 
 ------------------------------

```
2.  EDIT USER

    This allows the owner of the user to edit a user and save the
    updated changes.
```
------------------------------

 <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>View Edit User Details :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>JS Function</td>
<td><p>js/customer/users.js/get_UserDetails</p>
</tr>
<tr class="odd">
<td>PHP/API Call</td>
<td>lib/l-custAjax.php/CUSAJX_GetUserDetail</td>
</tr>
<tr class="even">
<td>Type</td>
<td>GET</td>
</tr>
<tr class="odd">
<td>Conditions required to satisfy the call</td>
<td>Selecteduserid,token</td>
</tr>
<tr class="even">
<td>Success Response</td>
<td>Displays the data of the selected user</td>
</tr>
<tr class="odd">
<td>Failure Response</td>
<td>Please select a User</td>
</tr>
</tbody>
</table>

------------------------------

  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Fetch Data</td>
<td>core.Users </td>
<td>All </td>
</tr>
</tbody>
</table>

------------------------------

 <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Update User Details:</strong></td>
<td></td>
</tr>
<tr class="even">
<td>JS Function</td>
<td><p>Onclick on id “updateAdvUser”</p>
</tr>
<tr class="odd">
<td>PHP/API Call</td>
<td>/lib/l-custAjax.php/CUSAJX_UpdateUser</td>
</tr>
<tr class="even">
<td>Type</td>
<td>POST</td>
</tr>
<tr class="odd">
<td>Conditions required to satisfy the call</td>
<td>userName,lastname,sel_userid,userrole,Sitename,securityType,timezone,token</td>
</tr>
<tr class="even">
<td>Success Response</td>
<td>Successfully updated user info</td>
</tr>
<tr class="odd">
<td>Failure Response</td>
<td>Don't have enough rights to perform operation</td>
</tr>
</tbody>
</table>

------------------------------

  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Deleting Data</td>
<td>core.Customers</td>
<td>username</td>
</tr>
<tr class="even">
<td>Updating Data</td>
<td>core.Customers</td>
<td>username,customer</td>
</tr>
<tr class="odd">
<td>Updating Data</td>
<td>core.Users </td>
<td>firstName,lastName,role_id,mfaEnabled,securityType,timezone</td>
</tr>
<tr class="even">
<td>Inserting Data</td>
<td>core.AuditLog</td>
<td>module,action,username,userid,useremail,url,method,ip,agent,status,rawReference,refName,created</td>
</tr>
</tbody>
</table>

------------------------------

```
3.  DELETE USER

    Deleting the selected User.
```
------------------------------

 <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Update User Details:</strong></td>
<td></td>
</tr>
<tr class="even">
<td>JS Function</td>
<td><p>Onclick of id “delete_user_option”</p>
</tr>
<tr class="odd">
<td>PHP/API Call</td>
<td>/lib/l-custAjax.php/CUSAJX_DeleteUser</td>
</tr>
<tr class="even">
<td>Type</td>
<td>GET</td>
</tr>
<tr class="odd">
<td>Conditions required to satisfy the call</td>
<td>Token,selecteduserID</td>
</tr>
<tr class="even">
<td>Success Response</td>
<td>Selected User deleted successfully</td>
</tr>
<tr class="odd">
<td>Failure Response</td>
<td><p>1. Don't have enough rights to perform operation.</p>
<p>2. Some error occurred while performing operation</p>
</td>
</tr>
</tbody>
</table>

------------------------------

  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Fetch Data using the rolename</td>
<td>core.Users</td>
<td>parent_id</td>
</tr>
<tr class="even">
<td>Deleting Data</td>
<td>core.Customers</td>
<td>username</td>
</tr>
<tr class="odd">
<td>Deleting Data</td>
<td>core.Users </td>
<td>userid</td>
</tr>
</tbody>
</table>

------------------------------

```
4.  Resend Mail

    This option allows to "Resend Mail" for the Users .
```
------------------------------

 <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Update User Details:</strong></td>
<td></td>
</tr>
<tr class="even">
<td>JS Function</td>
<td><p>Onclick on id “mail_resend_option”</p>
</tr>
<tr class="odd">
<td>PHP/API Call</td>
<td>/lib/l-custAjax.php/CUSTAJX_ResendUserMail</td>
</tr>
<tr class="even">
<td>Type</td>
<td>GET</td>
</tr>
<tr class="odd">
<td>Conditions required to satisfy the call</td>
<td>token,sel_userId,language</td>
</tr>
<tr class="even">
<td>Success Response</td>
<td>Please ask the user to check his registered email id to proceed.</td>
</tr>
<tr class="odd">
<td>Failure Response</td>
<td>Some error occurred.</td>
</tr>
</tbody>
</table>

------------------------------

  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Fetch Data</td>
<td>agent.emailTemplate</td>
<td>All</td>
</tr>
</tbody>
</table>

------------------------------

```
5.  Reset Password

    This allows the password for the selected user.
```
------------------------------

 <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Update User Details:</strong></td>
<td></td>
</tr>
<tr class="even">
<td>JS Function</td>
<td><p>Onclick on id “resetPass_resend_option”</p>
</tr>
<tr class="odd">
<td>PHP/API Call</td>
<td>/lib/l-custAjax.php/CUSTAJX_ResendUserMail</td>
</tr>
<tr class="even">
<td>Type</td>
<td>GET</td>
</tr>
<tr class="odd">
<td>Conditions required to satisfy the call</td>
<td>token,sel_userId,language,mailType=9</td>
</tr>
<tr class="even">
<td>Success Response</td>
<td>Please ask the user to check his registered email id to proceed</td>
</tr>
<tr class="odd">
<td>Failure Response</td>
<td>Some error occurred.</td>
</tr>
</tbody>
</table>

------------------------------

  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Fetch Data using the rolename</td>
<td>agent.emailTemplate</td>
<td>All</td>
</tr>
</tbody>
</table>

------------------------------

```
6.  Export To Excel

    This allows the user to export the user details .
```
------------------------------

 <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Update User Details:</strong></td>
<td></td>
</tr>
<tr class="even">
<td>JS Function</td>
<td><p>Onclick on id “export_user”</p>
</tr>
<tr class="odd">
<td>PHP/API Call</td>
<td>/lib/l-custAjax.php?function=CUSAJX_ExportUser</td>
</tr>
<tr class="even">
<td>Type</td>
<td>GET</td>
</tr>
<tr class="odd">
<td>Conditions required to satisfy the call</td>
<td>Token</td>
</tr>
<tr class="even">
<td>Success Response</td>
<td>Please check the Download Bar or the Downloads folder</td>
</tr>
<tr class="odd">
<td>Failure Response</td>
<td>No Data Available</td>
</tr>
</tbody>
</table>

------------------------------

  <table>
<colgroup>
<col style="width: 27%" />
<col style="width: 72%" />
</colgroup>
<tbody>
<tr class="odd">
<td><strong>Tables :</strong></td>
<td></td>
</tr>
<tr class="even">
<td>Type</td>
<td>Table</td>
<td>Columns</td>
</tr>
<tr class="odd">
<td>Fetch Data using the rolename</td>
<td>core.Users</td>
<td>userid</td>
</tr>
</tbody>
</table>

------------------------------
