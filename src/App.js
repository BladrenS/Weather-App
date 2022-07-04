import React, { useEffect, useState, useMemo } from 'react';
import { debounce } from 'lodash';
import "./App.css";
import FirstBlock from './components/FirstBlock';
import Image from './components/Image';
import SecondBlocks from './components/SecondBlocks';
import ThirdBlocks from './components/ThirdBlocks';
import FourthBlocks from './components/FourthBlocks';
import FifthBlocks from './components/FifthBlocks';
import SixthBlocks from './components/SixthBlocks';

function App() {
   const [town, setTown] = useState();
   const[data, setData] = useState();
   const [bground, setBground] = useState(2);

   useEffect(() => {
      async function sendResponse (){
      try{ 
         const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${town}&limit=1&appid=be0d3d68a1a5f2cfcc628f542be63daa`)
         const json = await response.json() 
         let lat = json[0].lat.toFixed(2); 
         let lon = json[0].lon.toFixed(2);
         try{ 
            const responsee = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=be0d3d68a1a5f2cfcc628f542be63daa`)
            const jsonn = await responsee.json()
            setData(jsonn)
            } catch (error) {
               console.log('Ошибка погоды')
            } 
      } catch (error) {
         console.log('Ошибка города')
      }}
      sendResponse ()
   }, [town])

    const changeHandler = event => {
      setTown(event.target.value)
   }

   const debouncedHandler = useMemo(
     () => debounce(changeHandler, 800), []) 

   const changeBackground = () => {
      document.querySelector(".weather__body").classList.remove(`bg8`)
      document.querySelector(".weather__body").classList.remove(`bg${bground - 1}`)
      setBground(bground + 1)
      document.querySelector(".weather__body").classList.add(`bg${bground}`)
      if (bground === 8) {
         setBground(1)
      } 
   }

   //Иммитация кэширования
   if(data === undefined) {
      setData({city:{name:'Moscow'}, list:[{main:{temp:290, humidity:0}, wind:{speed: 5, deg: 50}, clouds:{all:50}, weather:[{main:"Clouds"}]},{},{},{},{},{},{},{},{main:{temp:289, humidity:0}, wind:{speed: 4, deg: 50}, clouds:{all:1}, weather:[{main:"Clouds"}]},{},{},{},{},{},{},{},{main:{temp:291, humidity:0}, wind:{speed: 3, deg: 50}, clouds:{all:99}, weather:[{main:"Clouds"}]},{},{},{},{},{},{},{},{main:{temp:292, humidity:0}, wind:{speed: 2, deg: 50}, clouds:{all:33}, weather:[{main:"Rain"}]},{},{},{},{},{},{},{},{main:{temp:293, humidity:0}, wind:{speed: 1, deg: 50}, clouds:{all:50}, weather:[{main:"Clouds"}]},{},{},{},{},{},{},{main:{temp:292, humidity:0}, wind:{speed: 2, deg: 50}, clouds:{all:25}, weather:[{main:"Rain"}]}]})
   }


  return (
    <div className="App">
       <div className="project__header">
         <div className="header__block">
            <Image/> Weather pet-project
         </div>
         <div>
            <button 
            className='getCurrentWeather'
            onClick={changeBackground}
            >
            Change theme
            </button>
         </div>
       </div>
      <div className="weather__body bg1">
         <div className="search">
            <input 
            className='location' 
            type="text" 
            placeholder='Find your location...'
            onChange ={debouncedHandler}
            />
         </div>
         <div className="weather__blocks">
            <FirstBlock weather={data}/>
            <SecondBlocks weather={data}/>
            <ThirdBlocks weather={data}/>
            <FourthBlocks weather={data}/>
            <FifthBlocks weather={data}/>
            <SixthBlocks weather={data}/>
         </div>
      </div>
    </div>
  );
}

export default App;
