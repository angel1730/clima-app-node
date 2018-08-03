//Agregamos la constante para axios (peticiones al servidor-externo) axios npm
const axios = require('axios')

const getLugarLatLon = async(direccion) => {

    //Convertimos a url la cadena de direccion API para buscar lat y lon de diracciones (Geocoding API)
    let encodeURl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeURl }`)

    if (resp.data.status == 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${ direccion }`)
    }

    let resultado = resp.data.results[0]

    //JSON.stringify -> para desplegar toda la info del objeto
    //console.log(JSON.stringify(resp.data, undefined, 2))
    /*console.log("Dirección: ", JSON.stringify(resultado.formatted_address, undefined, 2))
    console.log("Lat: ", JSON.stringify(resultado.geometry.location.lat, undefined, 2))
    console.log("Lon:", JSON.stringify(resultado.geometry.location.lng, undefined, 2))*/

    return {
        direccion: resultado.formatted_address,
        lat: resultado.geometry.location.lat,
        lng: resultado.geometry.location.lng
    }
}

module.exports = {
    getLugarLatLon
}