import React from 'react';
import zont from '../assets/umbrella.svg'
import wind from '../assets/wind.svg'
import compass from '../assets/compass.svg'

const WeatherFooter = ({data}) => {
   return (
      <div className="weather__footer">
         <div className="rain">
            <img className='svgfooter' src={zont} alt="zont"/>
            <div className="precipitation__percent">{`${data.list[0].main.humidity}`}%</div>
         </div>
         <div className="wind">
            <img className='svgfooter' src={wind} alt="wind"/>
            <div className="wind__speed">{`${data.list[0].wind.speed}`}m/sec</div>
         </div>
         <div className="wind">
            <img className='svgfooter' src={compass} alt="dir"/>
            <div className="wind__dir">{`${data.list[0].wind.deg}`}°</div>
         </div>
      </div>
   );
};

export default WeatherFooter;