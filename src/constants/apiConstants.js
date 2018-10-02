const LOCALHOST = 'http://localhost:5000';
const PRODHOST = 'http://entraml.northeurope.cloudapp.azure.com';
const API_ROOT = '/api';


const api_url = function() {
 let api_url = '';
 if(process.env.NODE_ENV == 'development'){
   // api_url = ‘https://development/api/v0’;
   api_url = LOCALHOST + API_ROOT;
 }
 else if(process.env.NODE_ENV == 'production'){
   // api_url = ‘https://production/api/v0’;
   api_url = PRODHOST + API_ROOT;
 }
 return api_url;
}

export const url = api_url();