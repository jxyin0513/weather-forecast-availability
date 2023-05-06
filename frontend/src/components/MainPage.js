import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { getDailyWeatherThunk } from '../store/dweather';
import './MainPage.css'
import background from './image/main-page-background.jpg'

function Page(){
    const new_date = new Date();
    const cities = useSelector(state=>state.cities)
    const dispatch = useDispatch()
    const dailyWeather = Object.values(useSelector(state=>state.dWeathers))
    const weatherToday = dailyWeather.filter(weather=>{
        let calendar = new Date(weather.calendar_date)
        if(`${calendar.getFullYear()}-${calendar.getMonth()}-${calendar.getDate()}`===`${new_date.getFullYear()}-${new_date.getMonth()}-${new_date.getDate()}`){
            return true
        }else{
            return false
        }
    })
    const weather = weatherToday[0]
    const location = Object.values(useSelector(state=>state.location))[0]
    // let city;
    // if(location) city = location[0]
    useEffect(() => {
        dispatch(getDailyWeatherThunk(location.id));
      }, [dispatch, location.id]);

    return (
        <div className='home-Page'>
            {/* <img src={background} className='background'  alt='background'></img>
            <div className='current-Weather'>
                <div>New York City, NY</div>
            </div>
            <div className='weather-Bar'>
                <div>Today</div>
                <div>Hourly</div>
                <div>10 days</div>
            </div> */}
            <div className='today-Weather-Outer'>
                <div className='weather-Today-Header'>Weather Today</div>
                <div className='weather-Today-Sunrise'>Sunrise {weather?.sunrise}</div>
                <div className='weather-Today-Sunset'>Sunset {weather?.sunset}</div>
                <div className='weather-Today-Temp'>High/Low  <i className="fa-solid fa-temperature-three-quarters"></i> {weather?.maxTemp}/{weather?.minTemp}</div>
                <div className='weather-Today-Humidity'>Humidity {weather?.humidity}%</div>
            </div>
            <div className='main-Page-Welcome'>
                <div>Welcome to The Weather Channel. Check the weather of your place today</div>
            </div>
        </div>
    )
}

export default Page;
