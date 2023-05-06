import React, { useState, useEffect} from 'react';
import { NavLink, useHistory, useParams} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import { getDailyWeatherThunk } from '../../store/dweather';
import './daily.css';

function DailyWeather(){
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const new_date = new Date();
    const history = useHistory()
    const dispatch = useDispatch()
    const {cityId} = useParams()
    const city = useSelector(state=>state.cities[cityId])
    const weathers = Object.values(useSelector(state=>state.dWeathers))
    const dailyWeathers = weathers.filter(weather=>{
        const cDate = new Date(weather.calendar_date)
        if(cDate.getDate()>=new_date.getDate() && cDate.getDate()<=new_date.getDate()+10){
            return true
        }else{
            return false;
        }
    })
    if(dailyWeathers.length>10) dailyWeathers.slice(0, 11)
    console.log(dailyWeathers)
    useEffect(() => {
        dispatch(getDailyWeatherThunk(cityId));
      }, [dispatch, cityId]);

    return (
        <div className='daily-Weather-Outer'>
            <div className='daily-Weather-Header'>10 Day Weather</div>
            <div className='daily-City'> - {city?.name}</div>
            <div className='daily-Current-Time'>As of {new_date.getHours()}:{new_date.getMinutes()} {new_date.getHours()>=12? 'pm' : 'am'}</div>
            <div >
                {dailyWeathers && (
                    dailyWeathers.map(weather=>{
                        let today = new Date(weather.calendar_date)
                        return (
                            <div key={weather.id} className='daily-Weather-Container'>
                                <div className='daily-Time'>{days[today.getDay()]} {today.getDate()}</div>
                                <div className='daily-Temperature'><i className="fa-solid fa-temperature-three-quarters"></i> {weather.maxTemp}/{weather.minTemp}</div>
                                <div className='daily-Status'>{weather.status}</div>
                                <div className='daily-Humidity'>{weather.humidity}%</div>

                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
export default DailyWeather
