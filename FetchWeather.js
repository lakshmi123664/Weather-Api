import axios from "axios"
const API_KEY="aad2d131bee637762c0e16527ccdfe8f"
const URL="https://api.openweathermap.org/data/2.5/weather"

const Fetch=async (query)=>{
  const {data}=  await axios.get(URL,{
        params:{
            q:query,
            units:"metric",
            APPID:API_KEY
        }
    })
    return data
}

export default Fetch;
