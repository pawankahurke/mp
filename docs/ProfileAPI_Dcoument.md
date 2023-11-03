# PROFILE API CALLS

## Get the Machine Wise details of User
   Url : `https://pov.nanoheal.com/Dashboard/api/profile/getMachinewise`
   Parameters:

```
{"username":"manika"}
```

Response:

```
Array Of machines
[
    "DESKTOP-LQAVQOE"
]
```

## Get the tile names for the host
   Url : `https://pov.nanoheal.com/Dashboard/api/profile/getProfileItems`
   Parameters:

```
{"servicetag":"TJXCL2421"}
```

Response:

```
Array Of profiles
{
    "data": [
        {
            "parentId": "3",
            "profile": "Application Solutions",
            "dart": "null",
            "variable": "null",
            "shortDesc": "Application Solutions",
            "description": "Resolves+issues+related+to+windows+applications",
            "page": "2",
            "menuItem": "Application Solutions",
            "clickfun": "clickl1level"
        },
.....]}
```

## Push Solution as per the host
   Url :
   `https://pov.nanoheal.com/Dashboard/api/profile/pushSolutionItems`
   parameters:

```
{
    "servicetag":"QA-L7-Win10Ent",
    "solutionVar":"S00286SeqRunNow",
    "username":"admin"
}
```

Response:

```
{
    "jobid": "1925"
}
```

## Job Status as per the job id
   Url: `https://pov.nanoheal.com/Dashboard/api/profile/getjobstatus`
   parameters:

```
{"jobid":"1924"}
```

Response:

```
{
    "status": "Completed"
}
```

Status can be Completed/Pending/Failed
