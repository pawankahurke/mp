Requirements:

1.  Need to add in core.user table with new columns 'tenantid' and
    'deployment id'

2.  Then when a user logins we need to filter based on tenant id and
    deployment id

3.  Install.server -\> create record if the user signing up does not
    have a Server entry for his Deployment ID & Tenant ID

4.  Install.Sites -\> Validation on the site names

**Resolution:**

1.  If the sitename is already there for the tenantId and DeployementId,
    > "Duplicate" error will pop up.

2.  If the sitename is already there but the tenant id and deployementID
    > don't match, then the site name is added with
    > "sitename\_\<deployID\>".

Example:

Weowork.nanoheal.com --- 1 - 1 Site name:\test

If Duplicate site name , add the deployement id to the sitename as
'\_\<DeployementID\>'

Abhaya.nanoheal.com --- 1 - 2 Sitename:test_2

BTM.nanoheal.com --- 1 - 89 Sitename: test_89

5.  **User approval heirarchy :**

    **The first user from the new domain will be approved
    by Nanoheal Super Admin with USER ROLE NHSUPERADMIN** with a default
    role of "Deployment Admin" 

The next user from the newely created Domain user approval will go to
the user with "Deployement Admin " Role.

Example:

**Superadmin-\> Superadmin@nanoheal.com**

**Weowork.nanoheal.com --- 1 - 1**

test--- \>\
priya@wework.com Deployment Admin

divya@wework.com Approval ID - priya@wework.com Role :
Normal/Admin/Restricted/Deployment Admin

If the role is assigned as "Deployment Admin"

<john@nnaoheal.com> Approval ID - priya@wework.com/divya@wework.com

6.  We will convert CID as the TenantID/Cluster ID

ServerId is the Deployment ID.

So you will have to add one more row in install.servers for
Cluster/tenant ID along with deployment ID

Changes made:

1.  The cid and deployid will be picked from the config.php -
    \$dash_tanentId and \$dash_deployId.

2.  Added two columns in core.Users table 'cId' (INT 10) and
    'deployId'(INT 10).

3.  Added new column in install.Servers table 'cId' (INT 10) and removed
    the 'uniq' index from 'installuserid' column.

4.  In the core.Options and core.RoleMapping , there should be a default
    'SuperAdminRole' , the userApproval flow is not based on this role
    name.
