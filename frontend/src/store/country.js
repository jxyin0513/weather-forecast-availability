import { csrfFetch } from "./csrf";

const GET_COUNTRY = '/GET/COUNTRY';
const GET_ALL_COUNTRY = '/GET/COUNTRY/ALL';

const getCountry = (country)=>({
    type: GET_COUNTRY,
    country
})
const getAllCountry = (countries)=>({
    type:GET_ALL_COUNTRY,
    countries
})
export const getCountryThunk = (id)=>async (dispatch)=>{
    const response = await csrfFetch(`/api/locations/countries/${id}`)
    if(response.ok){
        const data = await response.json();
        console.log(data)
        dispatch(getCountry(data))
        return null;
    }else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    }
}

export const getCountryAllThunk = (id)=>async (dispatch)=>{
    const response = await csrfFetch(`/api/locations/countries/all`)
    if(response.ok){
        const data = await response.json();
        dispatch(getAllCountry(data))
        return null;
    }else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    }
}
const initialState = {}

const countriesReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case GET_COUNTRY:
            newState[action.country.id] = action.country
            return newState;

        case GET_ALL_COUNTRY:
            action.countries.forEach(country=>{
                newState[country.id] = country
            })
            return newState;

        default:
            return state;
    }
}
export default countriesReducer;
