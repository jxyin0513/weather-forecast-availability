import React, { useState, useEffect} from 'react';
import { NavLink, useHistory, useParams} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { getWeatherThunk } from '../../store/weather';
import './hourly.css'

function HourlyWeather(){
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const new_date = new Date();
    const history = useHistory()
    const dispatch = useDispatch()
    const {cityId} = useParams()
    const weathers = Object.values(useSelector(state=>state.weathers)).slice(0, 14)
    const city = useSelector(state=>state.cities[cityId])
    console.log(city)
    useEffect(() => {
        dispatch(getWeatherThunk(cityId));
      }, [dispatch, cityId]);

    return (
        <div className='hourly-Weather-Outer'>
            <div className='hourly-Weather-Header'>Hourly Weather</div>
            <div className='hourly-City'> - {city?.name}</div>
            <div className='hourly-Current-Time'>As of {new_date.getHours()}:{new_date.getMinutes()} {new_date.getHours()>=12? 'pm' : 'am'}</div>
            <div className='hourly-Date'>{days[new_date.getDay()]}, {months[new_date.getMonth()]} {new_date.getDate()}</div>
            <div className='hourly-weathers'>
            {weathers && (
                weathers.map(weather=>{
                    let time = weather.starttime.split(':')
                    return (
                        <div className='hourly-Weather-Container' key={weather.id}>
                            <div className='hourly-time'>{time[0]}:{time[1]} {time[0]>=12? 'pm':'am'}</div>
                            <div className='hourly-temperature'><i className="fa-solid fa-temperature-three-quarters"></i> {weather.temperature}</div>
                            <div className='hourly-status'>{weather.status}</div>
                            <div className='hourly-humidity'>{weather.humidity}%</div>
                        </div>
                    )
                }
            ))}
            </div>
        </div>
    )
}
export default HourlyWeather;
