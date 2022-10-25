

//import {getWeather} from '../services/openweathermapServiceAPI'

const openweathermapServiceAPI = require('../services/openweathermapServiceAPI')

//GET ALL
exports.index = async (req, res) => {
    try {
        const result = await openweathermapServiceAPI.getForecasts(req.params.id);
        const weatherList = result.data.list;
        const noonList = weatherList.filter(element => {
            return element.dt_txt.includes("00:00:00");
        });
        res.send(noonList);
    } catch (e) {
        console.log(e);
    }
}
//POST
exports.store = (req, res) => { }

//PUT
exports.update = (req, res) => { }

//GET ONE
exports.show = async (req, res) => {
    let result = '';
    if (!req.params.id.includes(',')) {
        result = await openweathermapServiceAPI.getCityWeather(req.params.id);
    } else {
        result = await openweathermapServiceAPI.getCityWeathers(req.params.id);
    }
    res.send(result.data);
}
//DELETE
exports.delete = (req, res) => { }