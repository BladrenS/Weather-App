import React, { useState } from 'react';
import WeatherFooter from './WeatherFooter';
import WeatherHeader from './WeatherHeader';
import WeatherInfo from './WeatherInfo';

const FirstBlock = ({weather}) => {
   return (
      <div className="weather__block first">
         <WeatherHeader/>
         <WeatherInfo data={weather}/>
         <WeatherFooter data={weather}/>
      </div>
   );
};

export default FirstBlock;