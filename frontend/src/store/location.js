import { csrfFetch } from "./csrf";

const GET_CITY = '/GET/CITY';

const getCity = (city)=>({
    type: GET_CITY,
    city
})

export const getCityThunk = (id)=>async (dispatch)=>{
    const response = await csrfFetch(`/api/locations/cities/${id}`)
    if(response.ok){
        const data = await response.json();
        dispatch(getCity(data))
        return null;
    }else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    }
}
const initialState = {'1':{'id': 1}}

const locationReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case GET_CITY:
            newState = {}
            newState[action.city.id] = action.city
            return newState;

        default:
            return state;
    }
}
export default locationReducer
