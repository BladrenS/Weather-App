import React, { useState } from 'react';
import WeatherFooterShort from './WeatherFooterShort';
import WeatherHeaderShort from './WeatherHeaderShort';
import WeatherInfoShort from './WeatherInfoShort';

const FifthBlocks = ({weather}) => {

   return (
      <div className="weather__block">
         <div className="weather__header">
            <WeatherHeaderShort count={4}/>
         </div>
         <WeatherInfoShort data={weather} count={32}/>
         <WeatherFooterShort data={weather} count={32}/>    
      </div>
   );
};

export default FifthBlocks;