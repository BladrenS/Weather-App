import React from 'react';
import wind from '../assets/wind.svg'

const WeatherFooterShort = ({data, count}) => {
   return (
      <div className="weather__footer shortfooter">
         <div className="wind short">
            <img className='svgfooter' width={40} src={wind} alt="wind"/>
            <div className="wind__speed">{`${data.list[count].wind.speed}`}m/sec</div>
         </div>
      </div>
   );
};

export default WeatherFooterShort;