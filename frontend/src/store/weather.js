import { csrfFetch } from "./csrf";

const GET_WEATHER = '/GET/WEATHER/HOURLY'

const getWeather = (weathers)=>({
    type: GET_WEATHER,
    weathers
})

export const getWeatherThunk = (id)=>async (dispatch)=>{
    const response = await csrfFetch(`/api/weathers/hourly/${id}`)
    if(response.ok){
        const data = await response.json();
        dispatch(getWeather(data))
        return null;
    }else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    }
}

const initialState = {}
const weathersReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case GET_WEATHER:
            action.weathers.forEach(weather=>{
                newState[weather.id] = weather
            })
            return newState;

        default:
            return state;
    }
}
export default weathersReducer
