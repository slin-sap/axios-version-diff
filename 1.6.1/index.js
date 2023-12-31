import 'dotenv/config';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.HOST
});

async function main() {
    const response = await axiosInstance.get('/sap/public/bc/ui5_ui5/bootstrap_info.json');
    console.log(response.status);
    console.log(response.statusText);
}

main();