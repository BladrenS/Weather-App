import React from 'react';
import sun from '../assets/sun.svg'
import clwsun from '../assets/clwsun.svg'
import rain from '../assets/rain.svg'
import clouds from '../assets/clouds.svg'

const WeatherInfo = ({data}) => {

   let image = sun
    if(data !== undefined){
      if(data.list[0].clouds.all >= 35){
         image = clouds
      } else if (data.list[0].clouds.all <= 34 && data.list[0].clouds.all > 10){
         image = clwsun
      } else {
         image = sun
      }
      if (data.list[0].weather[0].main === "Rain"){
         image = rain
      }
   }  

   return (
      <div className="weather__info">
         <div className="city">
            {data.city.name}
         </div>
         <div className="degrees">
            {Math.round(data.list[0].main.temp - 273,15)}°С
            <img src={image} width={80} alt="" />
         </div>
      </div>
   );
};

export default WeatherInfo;