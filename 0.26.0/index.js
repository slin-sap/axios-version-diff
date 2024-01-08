import "dotenv/config";
import axios from "axios";
// import adl from 'axios-debug-log';

// adl({
//   request: function (debug, config) {
//     debug('Request with ' + config)
//   }
// })

const axiosInstance = axios.create({
  baseURL: process.env.HOST,
});

axiosInstance.interceptors.request.use(
  function (config) {
    // console.log(config);
    return config;
  }
);

axiosInstance.interceptors.response.use(
  function (config) {
    console.log(config);
    return config;
  }
);

async function main() {
  const response = await axiosInstance.get(
    "/sap/public/bc/ui5_ui5/bootstrap_info.json"
  );
  console.log(response.status, response.statusText);
}

main();
