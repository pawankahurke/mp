const request = require('request');

const hostName = 'stagingreport.nanoheal.work';
const dartN = '77';
const event_id = '173';

function apiTest(postData, userAgent) {
  return new Promise((resolve, reject) => {
    let url = `http://${hostName}/main/rpc/rpc.php`;

    console.log(`Call: ${url}/api/pubsubnode/rpc`);
    const options = {
      method: 'POST',
      followAllRedirects: true,
      url: `${url}`,
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': userAgent,
      },
      form: postData,
    };
    console.log(options);
    request(options, function (error, response, body) {
      if (error) {
        throw new Error(error);
      }
      if (response.statusCode !== 200) {
        console.error(body);
        throw new Error(`error: statusCode=${response.statusCode}`);
      }
      resolve(body);
    });
  });
}

function randomString(len = 1) {
  let res = '';
  for (let i = 0; i <= len; i++) {
    res += `${Math.floor(Math.random() * 10)}`;
  }
  return res;
}

function nowTime() {
  return Math.floor(new Date().getTime() / 1000);
}

const testData = {
  POST: {
    ProtocolVer: '102',
    Site: 'TestQA_Testing',
    Machine: 'DEV000CI003',
    UUID: `0000cccc-${randomString(4)}-${randomString(4)}-${randomString(4)}-0000ccccc002`,
    ProcName: 'ELOG_LogEventEntry',
    ProcVer: '100',
    NumParams: '1',
    Type01: 'PSTRING',
    Val01:
      '{"tenantid":"","customerid":"","logtype":"event","site":"TestQA_Testing","ctime":"' +
      nowTime() +
      '","desc":"Windows Event Log Change Detected","machine":"DEV000CI003","uname":"jeadam","cver":"4.000.000.0135.08","csize":"13829120","logtimeh":"' +
      nowTime() +
      '","scrip":"' +
      dartN +
      '","hrtime":"2022-02-07 10:45:40","size":"0","id":"0","sysmanufacturer":"HP","os":"Windows 10 Professional, 64-bit","chassisbrand":"HP","chassistype":"Notebook","text1":{"level":"Error","log_name":"System","record_number": "143275","computer_name":" DEV000CI000.corp.capgemini.com","@timestamp":" \'2022-02-07T05:12:19.8821778Z\'","event_id": "' +
      event_id +
      '","source_name":" Schannel","process_id":" 1036","thread_id":" 15752","event_data":{"Type":"client","ErrorState":"10013"},"opcode":"Info","task":"None","message":"A fatal error occurred while creating a TLS client credential. The internal error state is 10013."}}\r\n{"tenantid":"","customerid":"","logtype":"event","site":"TestQA_Testing","ctime":"' +
      nowTime() +
      '","desc":"Windows Event Log Change Detected","machine":"DEV000CI003","uname":"jeadam","cver":"4.000.000.0135.08","csize":"13829120","logtimeh":"' +
      nowTime() +
      '","scrip":"' +
      dartN +
      '","hrtime":"2022-02-07 10:45:40","size":"0","id":"0","sysmanufacturer":"HP","os":"Windows 10 Professional, 64-bit","chassisbrand":"HP","chassistype":"Notebook","text1":{"level":"Error","log_name":"System","record_number": "143276","computer_name":" DEV000CI000.corp.capgemini.com","@timestamp":" \'2022-02-07T05:12:19.8823052Z\'","event_id": "' +
      event_id +
      '","source_name":" Schannel","process_id":" 1036","thread_id":" 15752","event_data":{"Type":"client","ErrorState":"10013"},"opcode":"Info","task":"None","message":"A fatal error occurred while creating a TLS client credential. The internal error state is 10013."}}\r\n',
  },
  userAgent: '1.1.1.1.1',
};

async function runTest() {
  const res = await apiTest(testData.POST, testData.userAgent);

  console.log('-----------------------');
  console.log(res);
  console.log(`test ` + __filename + ': ok');
  process.exit();
}

runTest();
