import React, { useState } from 'react';
import WeatherFooterShort from './WeatherFooterShort';
import WeatherHeaderShort from './WeatherHeaderShort';
import WeatherInfoShort from './WeatherInfoShort';

const FourthBlocks = ({weather}) => {
   
   return (
      <div className="weather__block second">
         <div className="weather__header dark">
            <WeatherHeaderShort count={3}/>
         </div>
         <WeatherInfoShort data={weather} count={24}/>
         <WeatherFooterShort data={weather} count={24}/>   
      </div>
   );
};

export default FourthBlocks;