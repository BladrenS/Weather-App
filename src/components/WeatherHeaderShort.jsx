import React from 'react';

const WeatherHeaderShort = (count) => {
   let date = new Date();
   let week = ''
   function getWeekDay(date, count){   
      let day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
      let counter = date.getDay() + count.count;
      if (counter > 6) counter = counter - 7;
      if(counter === 0) week = day[0] 
      if(counter === 1) week = day[1]
      if(counter === 2) week = day[2]
      if(counter === 3) week = day[3]
      if(counter === 4) week = day[4]
      if(counter === 5) week = day[5]
      if(counter === 6) week = day[6] 
   }
   getWeekDay(date, count);

   return (
      <span className="day">{week}</span>
   );
};

export default WeatherHeaderShort;