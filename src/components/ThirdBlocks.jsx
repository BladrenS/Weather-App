import React from 'react';
import WeatherFooterShort from './WeatherFooterShort';
import WeatherHeaderShort from './WeatherHeaderShort';
import WeatherInfoShort from './WeatherInfoShort';


const ThirdBlocks = ({weather}) => {

   return (
      <div className="weather__block">
         <div className="weather__header">
            <WeatherHeaderShort count={2}/>
         </div>
         <WeatherInfoShort data={weather} count={16}/>
         <WeatherFooterShort data={weather} count={16}/>   
      </div>
   );
};

export default ThirdBlocks;