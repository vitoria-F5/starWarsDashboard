//document.getElementById('personagens').innerHTML = 22;

const personagensContador = document.getElementById('personagens').innerHTML
const luasContador = document.getElementById('luas').innerHTML
const planetasContador = document.getElementById('planetas').innerHTML
const navesContador = document.getElementById('naves').innerHTML

personagensContador.innerHTML = 25;

preencherContadores();

function preencherContadores() {
    //personagensContador.innerHTML = swapiGet("people");
    //console.log("primeiro");
    
    Promise.all([
                swapiGet("people/"),
                swapiGet("vehicles/"),
                swapiGet("planets/"),
                swapiGet("starhips/"),
    ]).then(function(results) {
        console.log(results);
        personagensContador.innerHTML = results[0].data.count;
        luasContador.innerHTML = results[1].data.count;
        planetasContador.innerHTML = results[2].data.count;
        navesContador.innerHTML = results[3].data.count;
    });
}

function swapiGet(param) {
    return axios.get('https://swapi.dev/api/${param}');
}