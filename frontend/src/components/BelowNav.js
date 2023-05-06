import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { getWeatherThunk } from '../store/weather';
import { getCityThunk } from '../store/location';
import './BelowNav.css'
import background from './image/main-page-background.jpg'

function Nav(){
    const new_date = new Date();
    const city = useSelector(state=>state.cities)
    const dispatch = useDispatch()
    const history = useHistory()
    const weathers = Object.values(useSelector(state=>state.weathers))
    const location = Object.values(useSelector(state=>state.location))[0]
    // const [cityNum, setCityNum] = useState(1)
    const currentWeather = weathers.filter(weather=>{
        let start = new Date(`May 6, 2023 ${weather.starttime}`)
        if(start.getHours()===new_date.getHours()){
            return true
        }else{
            return false
        }
    })
    useEffect(() => {
        dispatch(getWeatherThunk(location.id));
        dispatch(getCityThunk(location.id))
      }, [dispatch, location.id]);

    async function toToday(e){
        e.preventDefault();
        history.push(`/`)
    }

    async function toHourly (e){
        e.preventDefault();
        history.push(`/hourly/${city[location.id].id}`)
    }
    async function toDaily(e){
        e.preventDefault();
        history.push(`/daily/${city[location.id].id}`)
    }
    return (
        <div className='below-NavBar-Outer'>
            <img src={background} className='background'  alt='background'></img>
            <div className='current-Weather'>
                <div><i className="fa-solid fa-temperature-three-quarters"></i>{currentWeather[0]?.temperature}, {location.name}</div>
            </div>
            <div className='weather-Bar'>
                <div className='today-Bar' onClick={toToday}>Today</div>
                <div className='hourly-Bar' onClick={toHourly}>Hourly</div>
                <div className='daily-Bar' onClick={toDaily}>10 days</div>
            </div>
        </div>
    )
}
export default Nav;
