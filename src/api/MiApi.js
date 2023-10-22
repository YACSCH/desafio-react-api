import axios from 'axios'

export const GetFarmaciasTurno = async () => {
    const base_url =  "https://midas.minsal.cl/farmacia_v2/WS/getLocalesTurnos.php"
    
  try {
        const response = await axios.get(base_url);
          return response;
    } catch (error) {
       console.log(error) 
    }  
}