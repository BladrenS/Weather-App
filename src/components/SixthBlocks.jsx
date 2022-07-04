import React, { useState } from 'react';
import WeatherFooterShort from './WeatherFooterShort';
import WeatherHeaderShort from './WeatherHeaderShort';
import WeatherInfoShort from './WeatherInfoShort';

const SixthBlocks = ({weather}) => {

   return (
      <div className="weather__block second">
         <div className="weather__header dark">
            <WeatherHeaderShort count={5}/>
         </div>
         <WeatherInfoShort data={weather} count={39}/>
         <WeatherFooterShort data={weather} count={39}/> 
      </div>
   );
};

export default SixthBlocks;