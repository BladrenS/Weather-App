import React from 'react';
import sun from '../assets/sun.svg'
import clwsun from '../assets/clwsun.svg'
import rain from '../assets/rain.svg'
import clouds from '../assets/clouds.svg'

const WeatherInfoShort = ({data, count}) => {

    let image = sun
     if(data !== undefined){
      if(data.list[count].clouds.all >= 35){
         image = clouds
      } else if (data.list[count].clouds.all <= 34 && data.list[count].clouds.all > 10){
         image = clwsun
      } else {
         image = sun
      }
      if (data.list[count].weather[0].main === "Rain"){
         image = rain
      } 
   } 

   return (
      <div className='shortinfo'>
         <img src={image} width={60} alt="" /> 
         {Math.round(data.list[count].main.temp - 273,15)}°С            
      </div>
   );
};

export default WeatherInfoShort;