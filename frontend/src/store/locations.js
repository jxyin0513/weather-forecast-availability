import { csrfFetch } from "./csrf";

const GET_ALL_CITY = '/GET/CITY/ALL'

const getAllCity = (cities)=>({
    type:GET_ALL_CITY,
    cities
})

export const getAllCityThunk = ()=>async (dispatch)=>{
    const response = await csrfFetch(`/api/locations/cities/all`)
    if(response.ok){
        const data = await response.json();
        dispatch(getAllCity(data))
        return null;
    }else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    }
}

const initialState = {}

const citiesReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case GET_ALL_CITY:
            action.cities.forEach(city=>{
                newState[city.id] = city
            })
            return newState;

        default:
            return state;
    }
}

export default citiesReducer;
