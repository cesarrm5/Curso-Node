const {inquirerMenu, pausa, leerInput} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

const main = async()=>{

    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu(); 
        console.log({opt})

        switch(opt){
            case '1':
                const lugar = await leerInput('Ciudad\n')
                console.log(lugar);
                await busquedas.ciudad(lugar);

                console.log('\n Informacion de la ciudad\n'.green);
                console.log("Ciudad:",);
                console.log("Lat:",);
                console.log("Lng:",);
                console.log("Temperatura:",);
                console.log("Minima:",);
                console.log("Maxima:",);
            break;
        }
        if (opt!== '0') await pausa();

    } while (opt !== '0')
    
}

main();
