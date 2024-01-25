const express = require('express')

class Server{

    constructor(){

        this.app = express();
        this.port =  process.env.PORT;

        //Middlewares
        this.middlewares();


        //Rutas de mi aplicacion 
        this.routes();
    }

    middlewares(){
        //Directorio Público

        this.app.use(express.static('public'));

    }


    routes(){
        this.app.get('/api',(req,res)=>{
            res.json({
                msg:'get API'
            })
        });

        this.app.put('/api',(req,res)=>{
            res.json({
                msg:'get put'
            })
        });


        this.app.post('/api',(req,res)=>{
            res.json({
                msg:'get API'
            });
        });

        
        this.app.delete('/api',(req,res)=>{
            res.json({
                msg:'Delete API'
            })
        });

        
    }

    listen(){
        this.app.listen(this.port,  ()=>{
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;