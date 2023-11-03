
Cypress.on('uncaught:exception', (err, runnable) => false);

describe('imitation Install patch', () => {
  it('request', () => {
    // const postData = {
    //   ProtocolVer: '102',
    //   Site: 'DART237_Testing',
    //   Machine: 'DESKTOP-5MJONN7',
    //   UUID: 'f3460cdf-1a92-4c70-9740-7a19769598c2',
    //   ProcName: 'INST_GetDefaultConfig',
    //   ProcVer: '100',
    //   NumParams: '4',
    //   Type01: 'PPALIST',
    //   Val01: '',
    //   Type02: 'PSTRING',
    //   Val02: 'DESKTOP-5MJONN7',
    //   Type03: 'PSTRING',
    //   Val03: 'DART237_Testing',
    //   Type04: 'PSTRING',
    //   Val04: 'f3460cdf-1a92-4c70-9740-7a19769598c2',
    // }
    const postData = {
      ProtocolVer: '102',
      Site: 'DART237_Testing',
      Machine: 'DESKTOP-5MJONN7',
      UUID: 'a04e8c9e-d52e-46d0-9e45-02b063b6fa88',
      ProcName: 'INST_GetPatches',
      ProcVer: '100',
      NumParams: '6',
      Type01: 'PPALIST',
      Val01: '',
      Type02: 'PDATETIME',
      Val02: '0',
      Type03: 'PSTRING',
      Val03: 'DESKTOP-5MJONN7',
      Type04: 'PSTRING',
      Val04: 'DART237_Testing',
      Type05: 'PSTRING',
      Val05: 'a04e8c9e-d52e-46d0-9e45-02b063b6fa88',
      Type06: 'DATETIME',
      Val06: '1675070977',
    }
        // JSON.stringify([
        //   {
        //     tenantid: '0',
        //     customerid: '',
        //     site: "DART237_Testing",
        //     ctime: 1673863009,
        //     desc: "Node Server Communication",
        //     machine: "95PZVR1",
        //     uname: "Nanoheal",
        //     cver: "4.000.000.0145.08",
        //     csize: 10418272,
        //     logtimeh: 1673863009000,
        //     scrip: 266,
        //     hrtime: "2023-01-16 01:56:49",
        //     sysmanufacturer: "Dell Inc.",
        //     os: "Windows 10 Professional, 64-bit",
        //     chassisbrand: "Dell Inc.",
        //     chassistype: "Space-saving",
        //     logtype: "event",
        //     size: 0,
        //     id: 0,
        //     text1: {ConnectionStatus: "Connected"},
        //   }]),
    // }

    const userAgent = "4.000.000.0145.08";
    const count = 1;
    for (let i = 0; i < count; i++) {
      cy.request({
        // url: `https://` + (Cypress.env('TEST_SERVER_HOST_NAME') || 'staging.nanoheal.work').replace('.', 'report.') + `/main/rpc/rpc.php?a=b`,
        url: `https://coereport.nanoheal.app/main/rpc/rpc.php`,
        // url: `https://g68jfzreport.nanoheal.app/main/rpc/rpc.php`,
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
        timeout: 90000,
      })
        .its('status')
        .should('eql', 200);
      cy.wait(100);
    }

  })
})
