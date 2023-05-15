import express from "express"
import *as ProyectosApiController from '../../api/controllers/proyectos.api.controllers.js'

const route = express.Router()

route.route('/api/projects')
.get(ProyectosApiController.findall)

route.route('/api/projects/cliente/:idCliente')
.post(ProyectosApiController.crearProyecto)

route.route('/api/projects/:id')
.get(ProyectosApiController.findById)
.patch(ProyectosApiController.editById)
.put(ProyectosApiController.replaceById)
.delete(ProyectosApiController.deleteById)

export default route
