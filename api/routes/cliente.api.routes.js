import express from 'express';
import *as ClienteApiController from '../../api/controllers/cliente.api.controllers.js'
import *as ProyectosApiController from '../../api/controllers/proyectos.api.controllers.js'

const route = express.Router()

route.route('/api/clientes')
.get(ClienteApiController.findall)
.post(ClienteApiController.crearCliente)

route.route('/api/clientes/:idCliente/projects')
.get(ProyectosApiController.porCliente)


export default route