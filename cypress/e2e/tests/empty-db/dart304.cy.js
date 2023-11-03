/**
 * # NCP-764
 * Machine level details are not visible under "manage devices" & "darts"
 * 
Expected result is that:
a). Machine level config should show site config if it is a part of site config. 
b).Machine level config should show group config if it is a part of group config. 
c). Machine level config should show Machine config if it is a part of Machine config.

if a machine has site level, group level and machine level config set, the hierrachy for showing details is as follows (these are also called Precendence & Mapping rules)

1. Show machine level config if available,
2. if the device doensot have machine level config, and if it is part of a group, show the group level config
3. if the device is not part of a group and doesnot ahve machine level config, show the site level config.

 
FYI:
if a device has a machine level config set, and if a user selects “Existing precedence and mapping rules” while changing the site / group config(as shown in the screenshot), the device will continue to have the original machine level configuration.
If a user selectes “Overriding precedence and mapping rules”, the machine level config will be replaced by the config that will be added at a site/group level
 */
import { login, randomString, darts, resolution } from '../../../helpers/test-utils';

Cypress.on('uncaught:exception', (err, runnable) => false);

function getDart304Val1(dart304_test_string) {
  const dart304Val1_hederText = `${dart304_test_string} You can fix many common issues easily with these powerful troubleshooting tools.`;
  const dart304Val1 = `Enable/Disable#NXT#mid#NXT#menuItem#NXT#type#NXT#parentId#NXT#profile#NXT#dart#NXT#variable#NXT#varValue#NXT#shortDesc#NXT#description#NXT#tileDesc#NXT#OS#NXT#26#NXT#status#NXT#authFalg#NXT#usageType#NXT#dynamic
    1#NXT#1#NXT#home#NXT#L0#NXT#0#NXT#Profile#NXT#null#NXT#null#NXT#null#NXT#Profile#NXT#NA#NXT#Profile#NXT#common#NXT#0#NXT#disable#NXT#F#NXT#1#NXT#0
    1#NXT#2#NXT#system info#NXT#L0#NXT#0#NXT#system info#NXT#null#NXT#null#NXT#null#NXT#system info#NXT#NA#NXT#system info#NXT#common#NXT#0#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#3#NXT#settings#NXT#L0#NXT#0#NXT#settings#NXT#null#NXT#null#NXT#null#NXT#settings#NXT#NA#NXT#settings#NXT#common#NXT#0#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#4#NXT#toolbox#NXT#L0#NXT#0#NXT#TOOLBOX#NXT#null#NXT#null#NXT#null#NXT#toolbox#NXT#NA#NXT#toolbox#NXT#common#NXT#0#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#5#NXT#service log#NXT#L0#NXT#0#NXT#service log#NXT#null#NXT#null#NXT#null#NXT#Service Log#NXT#NA#NXT#Service Log#NXT#common#NXT#0#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#6#NXT#Troubleshooters#NXT#L1#NXT#1#NXT#Troubleshooters#NXT#null#NXT#null#NXT#null#NXT#Troubleshooters#NXT#NA#NXT#${dart304Val1_hederText} Choose a category on the left, and then  Select the fix that best matches the symptoms of the problem#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#24#NXT#Browser Solutions#NXT#L1#NXT#1#NXT#Browser Solutions#NXT#null#NXT#null#NXT#null#NXT#Browser Solutions#NXT#NA#NXT#Run these fix to optimise your internet browsing speed and performance.#NXT#common#NXT#7#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#25#NXT#Browser Solutions#NXT#L2#NXT#7#NXT#Browser Solutions#NXT#null#NXT#null#NXT#null#NXT#Browser Solutions#NXT#NA#NXT#Run these fix to optimise your internet browsing speed and performance.#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#26#NXT#Chrome#NXT#L1#NXT#1#NXT#Chrome#NXT#null#NXT#null#NXT#null#NXT#Chrome#NXT#NA#NXT#Run these fix to optimise chrome browser browsing speed and performance.#NXT#common#NXT#8#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#27#NXT#Chrome#NXT#L2#NXT#8#NXT#Chrome#NXT#null#NXT#null#NXT#null#NXT#Chrome#NXT#NA#NXT#Run these fix to optimise chrome browser browsing speed and performance.#NXT#common#NXT#7#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#30#NXT#Internet Explorer#NXT#L1#NXT#1#NXT#Internet Explorer#NXT#null#NXT#null#NXT#null#NXT#Internet Explorer#NXT#NA#NXT#Run these fix to optimise Internet explorer internet browsing speed and performance#NXT#common#NXT#10#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#31#NXT#Internet Explorer#NXT#L2#NXT#10#NXT#Internet Explorer#NXT#null#NXT#null#NXT#null#NXT#Internet Explorer#NXT#NA#NXT#Run these fix to optimise Internet explorer internet browsing speed and performance#NXT#common#NXT#7#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#32#NXT#Clear Google Chrome Cache and cookies#NXT#L3#NXT#8#NXT#Clear Chrome Cache and cookies#NXT#286#NXT#S00286SeqRunNow#NXT#ClearChromeCache#NXT#Clear Chrome Cache and cookies#NXT#NA#NXT#When you use an internet browser it saves some information from websites in its cache. Clearing cache can fix certain problems, like loading or formatting issues on websites, optimizing Chrome performance. Please close Chrome browser before proceeding with the task.#NXT#common#NXT#8#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#34#NXT#Optimize Google Chrome#NXT#L3#NXT#8#NXT#Optimize Google Chrome#NXT#286#NXT#S00286SeqRunNow#NXT#optimizeChrome#NXT#Optimize Google Chrome#NXT#NA#NXT#Run these fix to delete cache, cookies and download history in your Chrome Internet browser. When you use an Internet browser, information from websites is saved in its cache and cookies. Clearing them fixes certain problems, such as loading or formatting issues on websites. Close your Chrome application before proceeding with this fix.#NXT#common#NXT#8#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#35#NXT#Reset Chrome#NXT#L3#NXT#8#NXT#Reset Chrome#NXT#286#NXT#S00286SeqRunNow#NXT#ResetChrome#NXT#Reset Chrome#NXT#NA#NXT#Run these fix to reset your Chrome internet browser if your Chrome settings have changed without your permission, possibly caused by applications or extensions you have installed. Note: this fix will remove some personal data such as temporary internet files, bookmarks, extensions, history, cookies, web form information, ActiveX Filtering and Tracking Protection data, and saved passwords. Close your Chrome application before proceeding with this fix.#NXT#common#NXT#8#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#44#NXT#Disk Space Solutions#NXT#L1#NXT#1#NXT#Disk Space Solutions#NXT#null#NXT#null#NXT#null#NXT#Disk Space Solutions#NXT#NA#NXT#Run these fix to optimise the disk space available in the system#NXT#common#NXT#11#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#45#NXT#Disk Space Solutions#NXT#L2#NXT#11#NXT#Disk Space Solutions#NXT#null#NXT#null#NXT#null#NXT#Disk Space Solutions#NXT#NA#NXT#Run these fix to optimise the disk space available in the system#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#46#NXT#Clear Disk Space#NXT#L3#NXT#11#NXT#Clear Disk Space#NXT#286#NXT#S00286SeqRunNow#NXT#ClearDiskSpace#NXT#Clear Disk Space#NXT#NA#NXT#Run these fix to free up space on your computer by deleting temporary files. This may take time depending on your computer's disk size.#NXT#common#NXT#11#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#47#NXT#Run Check disk#NXT#L3#NXT#11#NXT#Run Check disk#NXT#286#NXT#S00286SeqRunNow#NXT#RunCheckdisk#NXT#Run Check disk#NXT#NA#NXT#Run these fix if you are experiencing hard drive errors or strange computer behaviour. This will scan and fix any identified errors. Restart your computer once completed.#NXT#8/10#NXT#11#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#72#NXT#Clear IE Cookies and Cache#NXT#L3#NXT#10#NXT#Clear IE Cookies and Cache#NXT#286#NXT#S00286SeqRunNow#NXT#ClearIECookiesCache#NXT#Clear IE Cookies and Cache#NXT#NA#NXT#Run these fix to address Internet Explorer browser problems, such as website loading issues, website formatting errors, etc. When you use an Internet browser it saves some information from websites in its cache and cookies. Clearing them may fix these problems. Close your Internet Explorer application before proceeding with this fix#NXT#common#NXT#10#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#73#NXT#Clear Java Cache#NXT#L3#NXT#10#NXT#Clear Java Cache#NXT#286#NXT#S00286SeqRunNow#NXT#ClearJavaCache#NXT#Clear Java Cache#NXT#NA#NXT#Run these fix to clear your Internet Explorer cache, which contains information from websites you have visited. Clearing cache fixes certain problems, such as loading or formatting issues on websites. This fix will clear temporary files for the Java application.#NXT#common#NXT#10#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#74#NXT#Optimize Internet Explore#NXT#L3#NXT#10#NXT#Optimize Internet Explorer#NXT#286#NXT#S00286SeqRunNow#NXT#optimizeIE#NXT#Optimize Internet Explorer#NXT#NA#NXT#Run these fix to delete cache, cookies and download history in your Internet Explorer browser. When you use an internet browser, information from websites is saved in its cache and cookies. Clearing them fixes certain problems, such as loading or formatting issues on websites. Close your Internet Explorer application before proceeding with this fix.#NXT#10/8/7#NXT#10#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#79#NXT#PC Tune-Up#NXT#L3#NXT#9#NXT#PC Tune-Up#NXT#286#NXT#S00286SeqRunNow#NXT#PCTuneUp#NXT#Disk cleanups, disk defragmentation, Restore points, registry clean up, scandisk#NXT#NA#NXT#PC Tune-Up removes the items that can cause crashes, slow speeds, freezing, and impact the overall health of your device. It keeps your system up and running all the time.#NXT#common#NXT#11#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#95#NXT#Delete CBS Logs#NXT#L3#NXT#19#NXT#Delete CBS Logs#NXT#286#NXT#S00286SeqRunNow#NXT#DeleteCBSlog#NXT#Delete CBS Logs#NXT#NA#NXT#Delete Component based servicing log file, to reduce the drive space used by it#NXT#common#NXT#15#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#97#NXT#Remove Old User Profiles#NXT#L3#NXT#19#NXT#Remove Old User Profiles#NXT#286#NXT#S00286SeqRunNow#NXT#RemoveOldUserProfiles#NXT#Remove Old User Profiles#NXT#NA#NXT#Identify old & unused user profiles and clear them to maintain hygiene#NXT#common#NXT#15#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#98#NXT#Create System Restore Point#NXT#L3#NXT#19#NXT#Create System Restore Point#NXT#286#NXT#S00286SeqRunNow#NXT#CSRP#NXT#Create System Restore Point#NXT#NA#NXT#Enable Restore Point#NXT#common#NXT#15#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#99#NXT#System Fixes#NXT#L1#NXT#1#NXT#System Fixes#NXT#null#NXT#null#NXT#null#NXT#System Fixes#NXT#NA#NXT#Run these fixes to resolve system related issues.#NXT#common#NXT#21#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#100#NXT#System Fixes#NXT#L2#NXT#21#NXT#System Fixes#NXT#null#NXT#null#NXT#null#NXT#System Fixes#NXT#NA#NXT#Run these fixes to resolve system related issues.#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#101#NXT#Microsoft solutions#NXT#L1#NXT#1#NXT#Microsoft solutions#NXT#null#NXT#null#NXT#null#NXT#Microsoft solutions#NXT#NA#NXT#Run these fixes to troubleshoot some common microsoft office issues.#NXT#common#NXT#22#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#102#NXT#Microsoft solutions#NXT#L2#NXT#22#NXT#Microsoft solutions#NXT#null#NXT#null#NXT#null#NXT#Microsoft solutions#NXT#NA#NXT#Run these fixes to troubleshoot some common microsoft office issues.#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#103#NXT#Office 2016 Solutions#NXT#L1#NXT#1#NXT#Office 2016 Solutions#NXT#null#NXT#null#NXT#null#NXT#Office 2016 Solutions#NXT#NA#NXT#Office 2016 Solutions#NXT#common#NXT#23#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#104#NXT#Office 2016 Solutions#NXT#L2#NXT#23#NXT#Office 2016 Solutions#NXT#null#NXT#null#NXT#null#NXT#Office 2016 Solutions#NXT#NA#NXT#Office 2016 Solutions#NXT#common#NXT#22#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#105#NXT#Recreate Outlook Profile#NXT#L3#NXT#9#NXT#Recreate Outlook Profile#NXT#286#NXT#S00286SeqRunNow#NXT#RecreateOutlookProfile#NXT#Recreate Outlook Profile#NXT#NA#NXT#Run this fix if you are facing issues while using outlook.#NXT#common#NXT#23#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#106#NXT#Run Outlook in Safemode#NXT#L3#NXT#9#NXT#Run Outlook  in Safemode#NXT#286#NXT#S00286SeqRunNow#NXT#RunOutlookinSafemode#NXT#Run Outlook  in Safemode#NXT#NA#NXT#Run Outlook  in Safemode#NXT#common#NXT#23#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#107#NXT#Microsoft Word  Has Stopped Working#NXT#L3#NXT#9#NXT#Microsoft Word  Has Stopped Working#NXT#286#NXT#S00286SeqRunNow#NXT#WordStoppedWorking#NXT#Microsoft Word  Has Stopped Working#NXT#NA#NXT#Run this fix if Microsoft Word has stopped working on your computer.#NXT#common#NXT#23#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#108#NXT#Restart Print Spooler#NXT#L3#NXT#19#NXT#Restart Print Spooler#NXT#286#NXT#S00286SeqRunNow#NXT#RestartPrintSpooler#NXT#Restart Print Spooler#NXT#NA#NXT#This solution restarts print spooler service. Once can go to service.msc using run and look for status of service named spooler. The status of this server will turn on after successful execution of this solution.#NXT#common#NXT#21#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#109#NXT#Recycle Bin Icon Missing#NXT#L3#NXT#7#NXT#Recycle Bin Icon Missing#NXT#286#NXT#S00286SeqRunNow#NXT#RecycleBinmissing#NXT#Recycle Bin Icon Missing#NXT#NA#NXT#Enable Recycle Bin Icon on Desktop#NXT#common#NXT#21#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#110#NXT#SFC Scan#NXT#L3#NXT#7#NXT#SFC Scan#NXT#286#NXT#S00286SeqRunNow#NXT#SFC SCANNOW#NXT#SFC Scan#NXT#NA#NXT#The sfc /scannow command will scan all protected system files, and replace corrupted files with a cached copy. If in case you get any error in sfc scannow result, please contact to your administrator.#NXT#8/10#NXT#21#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#111#NXT#Microsoft Excel  has Stopped Working#NXT#L3#NXT#9#NXT#Microsoft Excel  Has Stopped Working#NXT#286#NXT#S00286SeqRunNow#NXT#excleStoppedWorking#NXT#Microsoft Excel  has Stopped Working#NXT#NA#NXT#Microsoft Excel  has Stopped Working#NXT#common#NXT#23#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#112#NXT#Microsoft Edge#NXT#L1#NXT#1#NXT#Microsoft Edge#NXT#null#NXT#null#NXT#null#NXT#Microsoft Edge#NXT#NA#NXT#Run these fix to optimise Microsoft Edge browser browsing speed and performance.#NXT#common#NXT#30#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#113#NXT#Microsoft Edge#NXT#L2#NXT#30#NXT#Microsoft Edge#NXT#null#NXT#null#NXT#null#NXT#Microsoft Edge#NXT#NA#NXT#Run these fix to optimise Microsoft Edge browser browsing speed and performance.#NXT#common#NXT#7#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#114#NXT#Office 2013 Solutions#NXT#L1#NXT#1#NXT#Office 2013 Solutions#NXT#null#NXT#null#NXT#null#NXT#Office 2013 Solutions#NXT#NA#NXT#Office 2013 Solutions#NXT#common#NXT#24#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#115#NXT#Office 2013 Solutions#NXT#L2#NXT#24#NXT#Office 2013 Solutions#NXT#null#NXT#null#NXT#null#NXT#Office 2013 Solutions#NXT#NA#NXT#Office 2013 Solutions#NXT#common#NXT#22#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#116#NXT#Run Outlook in Safemode#NXT#L3#NXT#9#NXT#Run Outlook  in Safemode#NXT#286#NXT#S00286SeqRunNow#NXT#RunOutlookinSafemode#NXT#Run Outlook  in Safemode#NXT#NA#NXT#Run Outlook  in Safemode#NXT#common#NXT#24#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#117#NXT#Microsoft Excel  has Stopped Working#NXT#L3#NXT#9#NXT#Microsoft Excel  Has Stopped Working#NXT#286#NXT#S00286SeqRunNow#NXT#excleStoppedWorking#NXT#Microsoft Excel  has Stopped Working#NXT#NA#NXT#Microsoft Excel  has Stopped Working#NXT#common#NXT#24#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#118#NXT#Microsoft Word  Has Stopped Working#NXT#L3#NXT#9#NXT#Microsoft Word  Has Stopped Working#NXT#286#NXT#S00286SeqRunNow#NXT#WordStoppedWorking#NXT#Microsoft Word  Has Stopped Working#NXT#NA#NXT#Run this fix if Microsoft Word has stopped working on your computer.#NXT#common#NXT#24#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#119#NXT#SFC Scan#NXT#L3#NXT#7#NXT#SFC Scan#NXT#286#NXT#S00286SeqRunNow#NXT#win7SFCscan#NXT#SFC Scan#NXT#NA#NXT#The sfc /scannow command will scan all protected system files, and replace corrupted files with a cached copy. If in case you get any error in sfc scannow result, please contact to your administrator.#NXT#7#NXT#21#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#120#NXT#Run Check disk#NXT#L3#NXT#11#NXT#Run Check disk#NXT#286#NXT#S00286SeqRunNow#NXT#win7RunCheckdisk#NXT#Run Check disk#NXT#NA#NXT#Run these fix if you are experiencing hard drive errors or strange computer behaviour. This will scan and fix any identified errors. Restart your computer once completed.#NXT#7#NXT#11#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#121#NXT#Office 2013 Repair#NXT#L3#NXT#9#NXT#Office 2013 Repair#NXT#286#NXT#S00286SeqRunNow#NXT#win7OfficeRepair2013#NXT#Office Repair#NXT#NA#NXT#Run this repair if you have issue with office applications#NXT#7#NXT#24#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#122#NXT#Office 2016 Repair#NXT#L3#NXT#9#NXT#Office 2016 Repair#NXT#286#NXT#S00286SeqRunNow#NXT#win7OfficeRepair2016#NXT#Office Repair#NXT#NA#NXT#Run this repair if you have issue with office applications#NXT#7#NXT#23#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#123#NXT#Clear Microsoft Edge Cache and Cookies#NXT#L3#NXT#8#NXT#Clear Microsoft Edge Cache and Cookies#NXT#286#NXT#S00286SeqRunNow#NXT#ClearedgeCache#NXT#Clear Microsoft Edge Cache and Cookies#NXT#NA#NXT#Run this fix to delete cache and cookies in your Microsoft Edge browser. When you use a Microsoft Edge browser it saves some information from websites in its cache.Clearing cache can fix certain problems, like loading or formatting issues on websites, optimising Microsoft Edge performance. Close your Microsoft Edge browser before proceeding with the task.#NXT#common#NXT#30#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#124#NXT#Optimise Microsoft Edge#NXT#L3#NXT#10#NXT#Optimise Microsoft Edge#NXT#286#NXT#S00286SeqRunNow#NXT#optimizeEdge#NXT#Optimise Microsoft Edge#NXT#NA#NXT#Run this fix to delete cache, cookies and User Data in your Microsoft Edge browser. When you use a Microsoft Edge browser, information from websites is saved in its cache and cookies. Clearing them fixes certain problems, such as loading or formatting issues on websites. Close your Microsoft Edge browser before proceeding with this fix. System files and files in use will not be deleted.#NXT#common#NXT#30#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#125#NXT#Reset Microsoft Edge#NXT#L3#NXT#8#NXT#Reset Microsoft Edge#NXT#286#NXT#S00286SeqRunNow#NXT#ResetEdge#NXT#Reset Microsoft Edge#NXT#NA#NXT#Run this fix to delete cache, cookies, bookmarks and download history in your Microsoft Edge browser. When you use a Microsoft Edge browser, information from websites is saved in its cache and cookies. Close your Microsoft Edge browser before proceeding with this fix.#NXT#common#NXT#30#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#126#NXT#Reset Internet Explore#NXT#L3#NXT#10#NXT#Reset Internet Explorer#NXT#286#NXT#S00286SeqRunNow#NXT#IEReset#NXT#Reset Internet Explorer#NXT#NA#NXT#Run this fix to reset your Internet Explorer browser if your Internet Explorer settings have changed without your permission, possibly caused by applications or extensions you have installed. Note: this fix will remove some personal data such as temporary internet files, favorites, extensions, history, cookies, web form information, and saved passwords. Close your Internet Explorer browser  before proceeding with this fix.#NXT#10/8/7#NXT#10#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#127#NXT#Microsoft Teams Solutions#NXT#L1#NXT#1#NXT#Microsoft Teams Solutions#NXT#null#NXT#null#NXT#null#NXT#Microsoft Teams Solutions#NXT#NA#NXT#Run these fixes to troubleshoot some common Microsoft Office issues.#NXT#common#NXT#33#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#128#NXT#Microsoft Teams Solutions#NXT#L2#NXT#33#NXT#Microsoft Teams Solutions#NXT#null#NXT#null#NXT#null#NXT#Microsoft Teams Solutions#NXT#NA#NXT#Run these fixes to troubleshoot some common Microsoft Office issues.#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#129#NXT#Teams cache Clear#NXT#L3#NXT#3#NXT#Teams cache Clear#NXT#286#NXT#S00286SeqRunNow#NXT#DeleatingTeamscache#NXT#Teams cache Clear#NXT#NA#NXT#Run this fix if you Microsoft Teams applicatons crashes unacceptably.#NXT#common#NXT#33#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#130#NXT#Office Repair#NXT#L3#NXT#9#NXT#OfficeClickToRun Repair#NXT#286#NXT#S00286SeqRunNow#NXT#OfficeRepair#NXT#Office Repair#NXT#NA#NXT#Run this fix to execute OfficeClickToRun Repair#NXT#common#NXT#24#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#131#NXT#Office Repair#NXT#L3#NXT#9#NXT#OfficeClickToRun Repair#NXT#286#NXT#S00286SeqRunNow#NXT#OfficeRepair#NXT#Office Repair#NXT#NA#NXT#Run this fix to execute OfficeClickToRun Repair#NXT#common#NXT#23#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#132#NXT#Clear Google Chrome Cache and cookies#NXT#L3#NXT#8#NXT#Clear Chrome Cache and cookies#NXT#286#NXT#S00286SeqRunNow#NXT#SCHClearChromeCache#NXT#Clear Chrome Cache and cookies#NXT#NA#NXT#When you use an internet browser it saves some information from websites in its cache. Clearing cache can fix certain problems, like loading or formatting issues on websites, optimizing Chrome performance. Please close Chrome browser before proceeding with the task.#NXT#common#NXT#8#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#133#NXT#Sync Now#NXT#L3#NXT#1#NXT#Sync Now#NXT#286#NXT#S00286SeqRunNow#NXT#OSYNC#NXT#Sync Now#NXT#NA#NXT#Synchronizes the configuration with server.#NXT#common#NXT#8#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#134#NXT#User Survey#NXT#L1#NXT#1#NXT#User Survey#NXT#null#NXT#null#NXT#null#NXT#User Survey#NXT#NA#NXT#User Survey#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#135#NXT#User Survey#NXT#L2#NXT#32#NXT#User Survey#NXT#null#NXT#null#NXT#null#NXT#User Survey#NXT#NA#NXT#User Survey#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#136#NXT#Business Service sentiment - SharePoint#NXT#L3#NXT#9#NXT#Business Service sentiment - SharePoint#NXT#286#NXT#S00286SeqRunNow#NXT#BusinessService_UserSurvey#NXT#Business Service sentiment - SharePoint#NXT#NA#NXT#Execute this tile to send survey related to Business Service sentiment - SharePoint.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#137#NXT#Desktop satisfaction#NXT#L3#NXT#9#NXT#Desktop satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#Desktopsatisfaction_UserSurvey#NXT#Desktop satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Desktop satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#138#NXT#Email Satisfaction#NXT#L3#NXT#9#NXT#Email Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#EmailSatisfaction_UserSurvey#NXT#Email Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Email Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#139#NXT#Employee Satisfaction#NXT#L3#NXT#9#NXT#Employee Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#EmployeeSatisfaction_UserSurvey#NXT#Employee Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Employee Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#140#NXT#Employee Sentiment#NXT#L3#NXT#9#NXT#Employee Sentiment#NXT#286#NXT#S00286SeqRunNow#NXT#EmployeeSentiment_UserSurvey#NXT#Employee Sentiment#NXT#NA#NXT#Execute this tile to send survey related to Employee Sentiment.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#141#NXT#IT DOC satisfaction#NXT#L3#NXT#9#NXT#IT DOC satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#ITDOC_UserSurvey#NXT#IT DOC satisfaction#NXT#NA#NXT#Execute this tile to send survey related to IT DOC satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#142#NXT#Laptop Satisfaction#NXT#L3#NXT#9#NXT#Laptop Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#LaptopSatisfaction_UserSurvey#NXT#Laptop Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Laptop Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#143#NXT#Mobile Satisfaction#NXT#L3#NXT#9#NXT#Mobile Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#MobileSatisfaction_UserSurvey#NXT#Mobile Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Mobile Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#144#NXT#Remote Worker Satisfaction#NXT#L3#NXT#9#NXT#Remote Worker Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#RemoteWorkerSatisfaction_UserSurvey#NXT#Remote Worker Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Remote Worker Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#145#NXT#Remote Worker Well being#NXT#L3#NXT#9#NXT#Remote Worker Well being#NXT#286#NXT#S00286SeqRunNow#NXT#RemoteWorkerWellbeing_UserSurvey#NXT#Remote Worker Well being#NXT#NA#NXT#Execute this tile to send survey related to Remote Worker Well being.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#146#NXT#Sample#NXT#L3#NXT#9#NXT#Sample#NXT#286#NXT#S00286SeqRunNow#NXT#Sample_UserSurvey#NXT#Sample#NXT#NA#NXT#Execute this tile to send survey related to Sample.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#147#NXT#Security Awareness - USB#NXT#L3#NXT#9#NXT#Security Awareness - USB#NXT#286#NXT#S00286SeqRunNow#NXT#SecurityAwarenessUSB_UserSurvey#NXT#Security Awareness - USB#NXT#NA#NXT#Execute this tile to send survey related to Security Awareness - USB.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#148#NXT#Security awareness#NXT#L3#NXT#9#NXT#Security awareness#NXT#286#NXT#S00286SeqRunNow#NXT#SecurityAwareness_UserSurvey#NXT#Security awareness#NXT#NA#NXT#Execute this tile to send survey related to Security awareness.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#149#NXT#SharePoint -Your ideas#NXT#L3#NXT#9#NXT#SharePoint -Your ideas#NXT#286#NXT#S00286SeqRunNow#NXT#SharePointYourideas_UserSurvey#NXT#SharePoint -Your ideas#NXT#NA#NXT#Execute this tile to send survey related to SharePoint -Your ideas.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#150#NXT#Software Satisfaction#NXT#L3#NXT#9#NXT#Software Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#SoftwareSatisfaction_UserSurvey#NXT#Software Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Software Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#151#NXT#Storage Satisfaction#NXT#L3#NXT#9#NXT#Storage Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#StorageSatisfaction_UserSurvey#NXT#Storage Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Storage Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#152#NXT#Time lost due to IT issues#NXT#L3#NXT#9#NXT#Time lost due to IT issues#NXT#286#NXT#S00286SeqRunNow#NXT#TimelostduetoITissues_UserSurvey#NXT#Time lost due to IT issues#NXT#NA#NXT#Execute this tile to send survey related to Time lost due to IT issues.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#153#NXT#Unified communication Satisfaction#NXT#L3#NXT#9#NXT#Unified communication Satisfaction#NXT#286#NXT#S00286SeqRunNow#NXT#UnifiedcommunicationSatisfaction_UserSurvey#NXT#Unified communication Satisfaction#NXT#NA#NXT#Execute this tile to send survey related to Unified communication Satisfaction.#NXT#common#NXT#32#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#154#NXT#Sound Issues#NXT#L1#NXT#1#NXT#Sound Issues#NXT#null#NXT#null#NXT#null#NXT#Sound Issues#NXT#NA#NXT#Select the fix that best matches the issue you are experiencing#NXT#common#NXT#46#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#155#NXT#Sound Issues#NXT#L2#NXT#46#NXT#Sound Issues#NXT#null#NXT#null#NXT#null#NXT#Sound Issues#NXT#NA#NXT#Select the fix that best matches the issue you are experiencing#NXT#common#NXT#2#NXT#enable#NXT#F#NXT#1#NXT#0
    1#NXT#156#NXT#Sound Tuneup#NXT#L3#NXT#46#NXT#Sound Tuneup#NXT#286#NXT#S00286SeqRunNow#NXT#SoundTuneup#NXT#Sound Tuneup#NXT#NA#NXT#This troubleshooter lets a user fix common problems related to sound/playback. Usually takes 10-15 minutes.#NXT#common#NXT#46#NXT#enable#NXT#F#NXT#1#NXT#0
    0#NXT#159#NXT#Sync Test#NXT#L3#NXT#46#NXT#Sync Test#NXT#286#NXT#S00286SeqRunNow#NXT#Sync Test#NXT#Sync Test#NXT#NA#NXT#Sync Test#NXT#common#NXT#46#NXT#enable#NXT#F#NXT#1#NXT#0`;
  return dart304Val1;
}

describe(`Machine level details are not visible under "manage devices" & "darts"`, () => {
  it('dart 304', () => {
    cy.visit('/Dashboard');
    login();

    // Set TestCI site
    darts();
    cy.get(`#dropdownMenuButton`).click();
    cy.get('#TestCI').click();
    cy.get(`[data-qa="saveSelectState"]`).click();

    const dart304_test_site = `cypressTestSite_${randomString(6)}`;
    dart304UpdateAndCheck(dart304_test_site);
    cy.wait(2000);

    // Set first device from TestCI site
    darts();
    cy.get(`#dropdownMenuButton`).click();
    cy.get('#TestCI i').click();
    cy.get('.nav').contains(`DEV000CI-`).click();
    cy.get(`[data-qa="saveSelectState"]`).click();
    const dart304_test_device = `cypressTestDevice_${randomString(6)}`;
    dart304UpdateAndCheck(dart304_test_device);

    cy.wait(2000);
  });
});

function dart304UpdateAndCheck(dart304_test_string) {
  const dart304Val1 = getDart304Val1(dart304_test_string);

  darts();
  // Edit DART304
  cy.contains(`Dart's List`).click();

  cy.get('#UserInput').clear().type('304');
  cy.get('[data-qa="DART304-Profilemanagement"]', { timeout: 10000 }).click({ force: true });

  cy.contains('button', 'Confirm', { timeout: 10000 }).click();

  cy.get('#object').should('not.be.empty');
  cy.get('[id="BrutusinForms#0_0"]').should('exist');
  cy.wait(1000);
  cy.get('[id="BrutusinForms#0_0"]').clear();
  cy.get('[id="BrutusinForms#0_0"]').invoke('val', dart304Val1).trigger('blur');
  cy.get('[id="BrutusinForms#0_1"]').clear();
  cy.get('[id="BrutusinForms#0_1"]').type(dart304_test_string);
  cy.get('[id="BrutusinForms#0_0"]').click().type(' {enter}');
  cy.get('[id="BrutusinForms#0_1"]').click().type(' {enter}');
  cy.wait(1000);

  cy.get('#configuresideBar .btnGroup .toolTip').click({ force: true });

  cy.get('#loader_submit').should('not.be.visible');
  cy.wait(1000);
  cy.wait(1000);
  cy.wait(1000);
  resolution();

  cy.contains(dart304_test_string).should('be.visible');
}
