//Importamos lugar.js
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

//Agregamos argv
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad que deseamos obtener el clima',
        demand: true
    }
}).argv

//Obtenemos el resultado
let getInfo = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLon(direccion)
        let temp = await clima.getClima(coors.lat, coors.lng)
        return `El clima en ${ coors.direccion } es de ${ temp.data.main.temp } °C`
    } catch (e) {
        return `No se pudo determinar el clima en ${ direccion }`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e))