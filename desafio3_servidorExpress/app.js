const express = require('express');
const ProductContainer = require('./contenedor');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const products= new ProductContainer('products.json');
products.init()



app.get('/productos', async(req, res)=>{
    let respuesta = JSON.parse(await products.getAll())
    res.send(respuesta)
    
})

app.get('/productosRandom',async(req, res)=>{

    let randomId=(min,max)=>{
        return Math.random()*(max-min)+min;
    }
    let idRandom=parseInt(randomId(0,products.productList.length-1))    
    res.send(await products.getByID(idRandom));
})


app.listen(PORT,()=>{
    console.log(`Server Running in port: ${PORT}`);
})