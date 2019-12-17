import config from 'config';



 export function handleResponse(response) {
     console.log("response hanlde response",response.message);
            if ( response.message === "Request failed with status code 401") {
                let loc='http://planning.infiniteairport.com';
              if(config.apiUrl === 'http://localhost:80/infinite-gestion-planning-back/public/api'){
                loc='http://localhost:3000/';
              }
            
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
               window.location = loc;
            
            }

}