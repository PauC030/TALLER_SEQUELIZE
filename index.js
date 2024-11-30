const express = require('express');
const dotenv = require('dotenv');
let sequelize =require('./config/database');
dotenv.config()
const app = express();
const port = process.env.puerto;
app.use(express.json()); 




const librosRoutes = require('./routes/librosRoutes');
app.use('/api', librosRoutes);


const usuariosRoutes = require ('./routes/usuariosRoutes')
app.use('/api', usuariosRoutes)

const prestamoRoutes = require ('./routes/prestamoRoutes')
app.use('/api', prestamoRoutes);



let startDB = async () =>
{
    try{
       await sequelize.sync();
       console.log('Base de Datos sincronizada');
       app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
    }
    catch(e){
        console.log('ERROR al conectar la Base de Datos');
    }
}
startDB();

