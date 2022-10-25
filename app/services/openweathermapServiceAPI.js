

const { default: axios } = require('axios')
const openweathermapConfig = require('../config/openweathermap')


const get = ({ path, params }) => axios.get(`https://api.openweathermap.org/data/2.5${path}`, {
    params: {
        units: 'metric', //units=metric,for temperature in Celsius, Temperature in Kelvin is used by default.
        appid: openweathermapConfig.apikey,
        ...params
    }
})

exports.getForecasts = (id) => {
    console.log("getForecasts......", id)
    return get({ path: '/forecast', params: { id, } });
}
exports.getCityWeather = (id) => {
    return get({ path: '/weather', params: { id, } })
}
exports.getCityWeathers = (ids) => {
    return get({ path: '/group', params: { id: ids } })
}


