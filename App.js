import "./App.css"; 
import { useState } from "react"; 
import fetch from "./FetchWeather"; 
 
function Weather() { 
   const [query, setQuery] = useState("") 
   const [weather, setWeather] = useState({}) 
 
   const handlechange = (e) => { 
      setQuery(e.target.value) 
   } 
 
   const search = async (e) => { 
      if (e.code === "Enter") { 
         let data = await fetch(query) 
         setWeather(data) 
 
      } 
   } 
 
   return ( 
      <div id="back"> 
         <input value={query} type="text" placeholder="enter your city name" onChange={handlechange} onKeyPress={search} /> 
         {weather.main && 
            <div id="city"> 
               {weather.name} 
               <span>{weather.sys.country}</span> 
               <div id="temp"> 
                  {Math.round(weather.main.temp)} 
                  <span>&deg;c</span> 
               </div> 
               <div> 
                  <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={`weather.weather[0].description`} /> 
                  <p>{weather.weather[0].description}</p> 
               </div> 
            </div> 
         } 
      </div> 
   ) 
} 
export default Weather;
