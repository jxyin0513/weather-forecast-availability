import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { getCountryThunk } from '../../store/country';
import Search from '../Search/search';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const location = Object.values(useSelector(state=>state.location))[0]
  const countries = Object.values(useSelector(state=>state.countries))[0]
  const dispatch = useDispatch()
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div>
        <LoginFormModal />
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    );
  }
  useEffect(() => {
    dispatch(getCountryThunk(location.id));
  }, [dispatch, location.id]);

  return (
    <>
      <div className='navBar-Outer'>
        <NavLink className='home-Logo' exact to="/">The Weather</NavLink>
        <Search />
        {/* {isLoaded && sessionLinks} */}
        <div className='nav-Last'>
          <div className='country-Container'><i className="fa-solid fa-earth-americas"></i>{countries?.name}</div>
          <div className='temp-Flag'>F</div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
