const LOCALHOST = 'http://localhost:5000';
const PRODHOST = 'http://entraml.northeurope.cloudapp.azure.com';
const API_ROOT = '/api';


const api_url = function() {
 let api_url = '';
//  console.log('log node env in apiconstants', process.env.NODE_ENV);
 if(process.env.NODE_ENV == 'development'){
  //  api_url = LOCALHOST;
   api_url = PRODHOST + API_ROOT;
 }
 else if(process.env.NODE_ENV == 'production'){
   api_url = PRODHOST + API_ROOT;
 }
 return api_url;
}

export const url = api_url();