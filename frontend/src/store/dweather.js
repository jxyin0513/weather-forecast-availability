import { csrfFetch } from "./csrf";

const GET_WEATHER_DAILY = '/GET/WEATHER/DAILY'

const getDailyWeather = (weathers)=>({
    type:GET_WEATHER_DAILY,
    weathers
})

export const getDailyWeatherThunk = (id)=>async (dispatch)=>{
    const response = await csrfFetch(`/api/weathers/daily/${id}`)
    if(response.ok){
        const data = await response.json();
        dispatch(getDailyWeather(data))
        return null;
    }else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
        return data.errors;
        }
    }
}

const initialState = {}
const dailyWeathersReducer = (state=initialState, action)=>{
    let newState = {...state}
    switch(action.type){
        case GET_WEATHER_DAILY:
            action.weathers.forEach(weather=>{
                newState[weather.id] = weather
            })
            return newState;

        default:
            return state;
    }
}
export default dailyWeathersReducer
