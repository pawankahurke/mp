# SOFTWARE DISTRIBUTION


## Main function and url`s

- Dashboard/softdist/SavePackageDataInDB.php - saving new package from "Add package" form
- Dashboard/softdist/SWD_Function.php->`saveDistributeConfigFn()` - saving configured package for 32bit and 64bit configs from "Configure" form to `softinst.PackagesConfiguration_new` table
- Dashboard/softdist/SWD_Function.php->`createLineConfiguration()` - here generating, appending and saving precheck, validation, patchDep values 
- Dashboard/softdist/SWD_Function.php->`getConfig()` - generating, final config and saving in  `softinst.PackagesConfiguration_new->edConfig`
- Dashboard/softdist/SWD_Function.php->`saveConfigFn()` - saving some main package info in `softinst.Packages` and saving final conf in Redis into `$redis->HSET('SWDConf', $id, $configure)`
- Dashboard/communication/communication_ajax.php->`Add_RemoteJobs()` - pushing job to client via Redis  
- Dashboard/ini.php->`getSoftDistData()` - from here client getting final config from Redis


## Config format

### Example
```
1~[autoupdate]
32Link:
64Link:
1,NT,https://coe.nanoheal.app/storage/setups/live/inst64.exe,0,1,4,C:\Program Files\Nanoheal\Client\,2,HKEY_LOCAL_MACHINE
1,NT,%WINDIR%\System32\cmd.exe,0,1,1,/k("C:\Program Files\Nanoheal\Client\inst64.exe /UPDATE /VERYSILENT" &exit)
Positive:
Negative:
Special:
LogFile:
Default:default,*.txt
DeleteLogFile:1
StatusMessageBox:
MessageBoxText:
MaxTimePerPatch:10
ProcessToKill:
```

- `1~[NAME]` - just name of package, first number always '1'
- `32Link/64Link` - "Deploy" and "Execute" lines where comma is separator 
  - `1` - enabled
  - `NT` - OS, for windows - 'NT', for android - 'AND'
  - `https://coe.nanoheal.app/storage/setups/live/inst64.exe` - link from where will be dowloaded/executed file/installer
  - `0` - session mode, 0 - background, 1 - foreground
  - `1` - api mode, for deploy can be 0,1,4,6 and for execute 1,2,3,4
  - `4` - append.. dont know what is it..  perhaps '1' for execute and '4' for deploy lines
  - `C:\Program Files\Nanoheal\Client\` - where file will be dowloaded/executed
    - After appending some checks (all not required)
      - Precheck
        - by file 
          - `!0,` or `0,` + `$pfilepath`
        - by software name
          - `!1,` or `1,` + `$psoftname` + `#` + `$pSoftVer` 
        - by Registry
          - `!2,` or `2,` + `$prootKey` + `#` + `$pValueDE` 
      - Validation
        - by file
          - `1` or empty + `$validity` + `#` + `$vFilePath` 
        - by Registry
          - `1` or empty + `$validity` + `#` + `$vRegName` + `#` + `$vValue`
      - Patch Dependency (we dont know sure about this check)
        - maybe must always appended in the end of each line as order number of line...
        - maybe for 'execute' lines if selected 'patchDep' must be instead of 'precheck', but instaed 0,1,2, will be always '3,' and + patchDep value
        - and this value can be as order int/string number (1) and also sequence '1,2,3,4,5'
- `Positive` - `softinst.PackagesConfiguration_new->posKeywords`
- `Negative` - `softinst.PackagesConfiguration_new->negKeywords`
- `Special` - empty yet, we dont know something about this field
- `LogFile` - "\n" + `softinst.PackagesConfiguration_new->logFilesToRead`
- `Default` - `softinst.PackagesConfiguration_new->defaultRead`
- `DeleteLogFile` - `softinst.PackagesConfiguration_new->deleteLogFile` (number)
- `StatusMessageBox` - `softinst.PackagesConfiguration_new->enableMessage`
- `MessageBoxText`
  - Example: MessageBoxText:[1]-While Downloading.#[2]-While Installing
    - `[1]` - order number, but if 'postDownloadMsg' not exists, then will be like `MessageBoxText:[2]-While Installing`
    - `While Downloading` - `softinst.PackagesConfiguration_new->postDownloadMsg`
    - `While Installing` - `softinst.PackagesConfiguration_new->preInstallMsg`
- `MaxTimePerPatch` - `softinst.PackagesConfiguration_new->maxTime` (number)
- `ProcessToKill` - `softinst.PackagesConfiguration_new->processToKill`