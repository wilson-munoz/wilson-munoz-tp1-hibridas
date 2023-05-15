import express from 'express'
import *as Proyectoscontroller from '../controllers/proyectos.controllers.js'

const route = express.Router()

route.get('/', Proyectoscontroller.verHome)

route.get('/mobile', Proyectoscontroller.verMobile)
route.get('/landing', Proyectoscontroller.verLanding)
route.get('/webapp', Proyectoscontroller.verWebApp)
route.get('/ecommerce', Proyectoscontroller.verEcommerce)
route.get('/game', Proyectoscontroller.verGame)

export default route