import React from 'react';
import { useState } from 'react';
import WeatherFooterShort from './WeatherFooterShort';
import WeatherHeaderShort from './WeatherHeaderShort';
import WeatherInfoShort from './WeatherInfoShort';


const WeatherBlocks = ({weather}) => {

   return (
      <div className="weather__block second">
         <div className="weather__header dark">
         <WeatherHeaderShort count={1}/>
         </div> 
         <WeatherInfoShort data={weather} count={8}/>
         <WeatherFooterShort data={weather} count={8}/>
      </div>
   );
};

export default WeatherBlocks;