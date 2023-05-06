import React, { useState, useEffect,  } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { getAllCityThunk } from '../../store/locations';
import { getCityThunk } from '../../store/location';
import './search.css';

const Search = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const [search, setSearch] = useState('');
    const [cityResult, setCityResult] = useState([])
    const user = useSelector(state=>state.session.user)
    const cities = Object.values(useSelector(state=>state.cities))
    const location = Object.values(useSelector(state=>state.location))[0]
    const [cityId, setCityId] = useState(location.id)

    useEffect(() => {
        dispatch(getAllCityThunk());
        dispatch(getCityThunk(cityId))
      }, [dispatch, cityId]);

    const searchFilter = (e)=>{
        setSearch(e.target.value);
        let searchCity
        if(e.target.value){
            searchCity = cities.filter(city=>{
                if(city.name.toLowerCase().startsWith(e.target.value.toLowerCase())){
                    return true;
                }else{
                    return false;
                }
            })
        }
        setCityResult(searchCity)
    }
    const changeCity = (e)=>{
        e.preventDefault();
        setCityId(e.target.id)
        history.push('/')
    }

    return (
    <div className='search-Bar-Outer'>
        <form className='search-form'>
            <i id='search-icon' className="fa-solid fa-magnifying-glass"></i>
            <input
              className='search-bar'
              type='search'
              size={48}
              placeholder="Search City"
              onChange={
                searchFilter
                }></input>
        </form>
        {search&&cityResult.length>0&&(
            <div className='search-Results'>
                {cityResult.map(city=>(
                    <div className='city-Outer-Container' key={city.id}>
                        <div className='results-city-Name' id={city.id} onClick={changeCity}>{city.name}</div>
                    </div>
                ))}
            </div>
        )}
        {search&&cityResult.length===0&&(
            <div className='no-Results-Outer'>
                <div className='no-Results'>No results found</div>
            </div>
        )}
    </div>
    )
}
export default Search
