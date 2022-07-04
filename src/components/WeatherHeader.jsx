import React, { useState } from 'react';

const WeatherHeader = () => {
   let dates = new Date();
   let week = ''
   let month = ''
   let dayNumber = dates.getDate()
   if(dates.getDay() === 0) week = 'Sunday'
   if(dates.getDay() === 1) week = 'Monday'
   if(dates.getDay() === 2) week = 'Tuesday'
   if(dates.getDay() === 3) week = 'Wednesday'
   if(dates.getDay() === 4) week = 'Thursday'
   if(dates.getDay() === 5) week = 'Friday'
   if(dates.getDay() === 6) week = 'Saturday'
   if(dates.getMonth() === 0) month = 'January'
   if(dates.getMonth() === 1) month = 'February'
   if(dates.getMonth() === 2) month = 'March'
   if(dates.getMonth() === 3) month = 'April'
   if(dates.getMonth() === 4) month = 'May'
   if(dates.getMonth() === 5) month = 'June'
   if(dates.getMonth() === 6) month = 'Jule'
   if(dates.getMonth() === 7) month = 'August'
   if(dates.getMonth() === 8) month = 'September'
   if(dates.getMonth() === 9) month = 'October'
   if(dates.getMonth() === 10) month = 'November'
   if(dates.getMonth() === 11) month = 'December'

   const [weekday, setWeekday] = useState(week)
   const [date, setDate] = useState(dayNumber)
   const [months, setmonths] = useState(month)

   return (
      <div className="weather__header">
         <span>{weekday}</span>
         <span className="date">{date}th of {months}</span>
      </div>
   );
};

export default WeatherHeader;