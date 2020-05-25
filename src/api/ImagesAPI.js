  import * as axios from 'axios';
  

  let ReduxImage= axios.get('http://testimages.osora.ru:86/')
     .then (response =>{
        return response.data;
       }) ;

 export default ReduxImage;