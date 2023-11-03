import { randomString } from './test-utils.js';

export const userAgents = ['4.000.000.0139.08', '4.000.000.0140.08', '4.000.000.0138.08', '4.000.000.0136.08', '4.000.000.0135.08'];

/**
 * DART 308 - Personal Analytics
 * @param string siteName
 * @param string MachineName
 * @param string uuid
 * @param string userAgentVersion
 * @returns object
 */
export const dart308_PersonalAnalytics = (siteName, MachineName, uuid, procduration = 24, userAgentVersion = null) => {
  const scrip = '308';
  const ctime = Math.floor(new Date().getTime() / 1000) - 3600 * 2;
  const logtimeh = ctime * 1000;

  const uname = `${MachineName}`; // Example 'VasuBalakrishna'
  const userAgent = userAgentVersion || userAgents[0];

  const postData = {
    ProtocolVer: '200',
    Site: siteName,
    Machine: MachineName,
    UUID: uuid,
    ProcName: 'ELOG_LogMultipleEvents',
    ProcVer: '100',
    NumParams: '1',
    Type01: 'PSTRING',
    Val01:
      JSON.stringify([
        {
          tenantid: '0',
          logtype: 'event',
          site: siteName,
          desc: 'Personal analytics data sync',
          machine: MachineName,
          cver: userAgent,
          csize: '13829120',
          scrip: scrip,
          size: '0',
          id: '0',
          sysmanufacturer: 'Dell Inc.',
          os: 'Windows 7 Professional, 64-bit',
          chassisbrand: 'Dell Inc.',
          chassistype: 'Desktop',
          ctime: ctime,
          logtimeh: logtimeh,
          uname: uname,
          text1: { procstarttime: 1644229980, procendtime: 1644229983, procduration, processname: 'chrome', procwindows: 'Save As' },
        },
        {
          tenantid: '0',
          logtype: 'event',
          site: siteName,
          desc: 'Personal analytics data sync',
          machine: MachineName,
          cver: userAgent,
          csize: '13829120',
          scrip: scrip,
          size: '0',
          id: '0',
          sysmanufacturer: 'Dell Inc.',
          os: 'Windows 7 Professional, 64-bit',
          chassisbrand: 'Dell Inc.',
          chassistype: 'Desktop',
          ctime: ctime,
          logtimeh: logtimeh,
          uname: uname,
          text1: {
            procstarttime: 1644229983,
            procendtime: 1644229996,
            procduration,
            processname: 'chrome',
            procwindows: 'YouTube Downloader - Download YouTube videos in MP3, MP4, 3GP | Y2mate.com - Google Chrome',
          },
        },
        {
          tenantid: '0',
          logtype: 'event',
          site: siteName,
          desc: 'Personal analytics data sync',
          machine: MachineName,
          cver: userAgent,
          csize: '13829120',
          scrip: scrip,
          size: '0',
          id: '0',
          sysmanufacturer: 'Dell Inc.',
          os: 'Windows 7 Professional, 64-bit',
          chassisbrand: 'Dell Inc.',
          chassistype: 'Desktop',
          ctime: ctime,
          logtimeh: logtimeh,
          uname: uname,
          text1: {
            procstarttime: 1644229996,
            procendtime: 1644230018,
            procduration,
            processname: 'chrome',
            procwindows: 'Big Void...: Amit Shah on Lata Mangeshkars death; BJP defers manifesto launch in U.P - YouTube - Google Chrome',
          },
        },
        {
          tenantid: '0',
          logtype: 'event',
          site: siteName,
          desc: 'Personal analytics data sync',
          machine: MachineName,
          cver: userAgent,
          csize: '13829120',
          scrip: scrip,
          size: '0',
          id: '0',
          sysmanufacturer: 'Dell Inc.',
          os: 'Windows 7 Professional, 64-bit',
          chassisbrand: 'Dell Inc.',
          chassistype: 'Desktop',
          ctime: ctime,
          logtimeh: logtimeh,
          uname: uname,
          text1: {
            procstarttime: 1644230018,
            procendtime: 1644230042,
            procduration,
            processname: 'chrome',
            procwindows: 'YouTube Downloader - Download YouTube videos in MP3, MP4, 3GP | Y2mate.com - Google Chrome',
          },
        },
        {
          tenantid: '0',
          logtype: 'event',
          site: siteName,
          desc: 'Personal analytics data sync',
          machine: MachineName,
          cver: userAgent,
          csize: '13829120',
          scrip: scrip,
          size: '0',
          id: '0',
          sysmanufacturer: 'Dell Inc.',
          os: 'Windows 7 Professional, 64-bit',
          chassisbrand: 'Dell Inc.',
          chassistype: 'Desktop',
          ctime: ctime,
          logtimeh: logtimeh,
          uname: uname,
          text1: { procstarttime: 1644230042, procendtime: 1644230045, procduration, processname: 'chrome', procwindows: 'Save As' },
        },
      ]) + '\r\n',
  };

  return postData;
};

export const sendRawEvent = async (postData, count = 1, userAgentVersion = null) => {
  const userAgent = userAgentVersion || userAgents[0];
  // Add 10 events from new device to created site.
  for (let i = 0; i < count; i++) {
    cy.request({
      url: `https://` + (Cypress.env('TEST_SERVER_HOST_NAME') || 'staging.nanoheal.work').replace('.', 'report.') + `/main/rpc/rpc.php?a=b`,
      method: 'POST',
      failOnStatusCode: false,
      body: postData,

      // json: true,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': userAgent,
      },
      form: true,
      timeout: 30000,
    })
      .its('status')
      .should('eql', 200);
    cy.wait(100);
  }
};

/**
 * DART 148 - One Way Synchronization
 * @param string siteName
 * @param string MachineName
 * @param string uName
 * @param string userAgentVersion
 * @returns object
 */
export const dart148_OneWaySynchronization = (siteName, MachineName = null, UUID = null, uName = null, userAgentVersion = null) => {
  const scrip = '148';
  const ctime = Math.floor(new Date().getTime() / 1000) - 3600 * 2;
  const logtimeh = ctime * 1000;

  const machineName = MachineName || `CICD000${randomString(3)}`;
  const uname = uName || machineName; // Example 'VasuBalakrishna'
  const userAgent = userAgentVersion || userAgents[0];
  const uuid = UUID || `C1CD0000-${randomString(4)}-${randomString(4)}-${randomString(4)}-000000222222`;
  return {
    Machine: machineName,
    NumParams: '1',
    ProcName: 'ELOG_LogEventEntry',
    ProcVer: '100',
    ProtocolVer: '102',
    Site: siteName,
    Type01: 'PSTRING',
    UUID: uuid,
    Val01:
      JSON.stringify({
        tenantid: '',
        customerid: '',
        site: siteName,
        ctime: ctime,
        desc: 'One Way Synchronization',
        machine: machineName,
        uname: uname,
        cver: userAgent,
        csize: '26235392',
        logtimeh: logtimeh,
        scrip: scrip,
        hrtime: '2022-02-07 10:41:15',
        sysmanufacturer: 'innotek GmbH',
        os: 'Windows 10 Professional, 64-bit',
        chassisbrand: 'Oracle Corporation',
        chassistype: 'Other',
        logtype: 'event',
        size: '0',
        id: '0',
        text1: { SynchronizeGroups: 'Successful', RetrieveVariableValues: 'Successful', RetrievedValueMaps: 'Successful' },
        text2: {
          log: 'Type of run: Scheduled\\\\nLast VarValue server time: Sun Feb 06 21:36:10 India Standard Time 2022\\\\nLast ValueMap server time: Sun Feb 06 21:36:11 India Standard Time 2022\\\\nNew VarValue server time: Mon Feb 07 10:41:55 India Standard Time 2022\\\\nNew ValueMap server time: Mon Feb 07 10:41:57 India Standard Time 2022',
        },
        text3: { SynchronizeGroups: '', RetrieveVariableValues: '', RetrievedValueMaps: '' },
      }) + '\r\n',
  };
};
