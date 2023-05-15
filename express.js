import express from 'express';
import ProyectosRoutes from './routes/proyectos.routers.js'
import ProyectosApiRoute from './api/routes/proyectos.api.routes.js'
import ClienteApiRoute from './api/routes/cliente.api.routes.js'

const app = express();
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.use('/', express.static('public'));

app.use('/', ProyectosRoutes)
app.use('/', ProyectosApiRoute)
app.use('/', ClienteApiRoute)


app.listen(2222, function(){
    console.log('server started in https://localhost:2222');
})


