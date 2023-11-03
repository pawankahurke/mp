const https = require('https');

const checkDevDeploy = (hostname, path) => {
  //       Build request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const options = {
        hostname: hostname,
        port: 443,
        timeout: 10000,
        path: path,
        method: 'GET',
        rejectUnauthorized: false,
        requestCert: true,
      };

      const req = https.request(options, res => {
        let body = '';

        res.on('data', data => {
          body = data;
        });

        res.on('end', () => {
          try {
            resolve(JSON.parse(String(body)).build);
          } catch (e) {
            console.error(e);
            console.error(String(body));
          }
        });
      });

      req.on('error', error => {
        reject(error);
      });

      req.end();
    }, 1000);
  });
};

//         Check deploy
const checkDeploy = async () => {
  const path = '/Dashboard/cicd.php';
  console.log(`Check CI_PIPELINE_ID: ${process.env.CI_PIPELINE_ID}`);

  let build = -1;
  do {
    try {
      build = await checkDevDeploy(process.env.TEST_SERVER_HOST_NAME, path);
    } catch (e) {
      console.warn(e);
    }
    console.log(`Check CI_PIPELINE_ID: ${process.env.CI_PIPELINE_ID} > ${build}`);
    // v2
  } while (process.env.CI_PIPELINE_ID > build);

  console.log(`Check CI_PIPELINE_ID: ${process.env.CI_PIPELINE_ID} > ${build} passed`);
};

checkDeploy();
