//Agregamos la constante para axios (peticiones al servidor-externo) axios npm
const axios = require('axios')

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=67e60f375551bb6a08034f4407eecffa`)
    return resp
}

module.exports = {
    getClima
}