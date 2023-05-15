import *as ProyectosServices from '../services/proyectos.services.js'

function verHome(req, res){
    ProyectosServices.traerProyectosTodos()
    .then(function(){
        res.render('Home')
    })
}


function verMobile(req, res){
    ProyectosServices.traerMobile()
    .then(function(proyectos){
        res.render('mobile', {proyectos})
    })
}

function verLanding(req, res){
    ProyectosServices.traerLanding()
    .then(function(proyectos){
        res.render('landing', {proyectos})
    })
}

function verWebApp(req, res){
    ProyectosServices.traerwebApp()
    .then(function(proyectos){
        res.render('webapp', {proyectos})
    })
}

function verEcommerce(req, res){
    ProyectosServices.traerEcommerce()
    .then(function(proyectos){
        res.render('ecommerce', {proyectos})
    })
}

function verGame(req, res){
    ProyectosServices.traerGame()
    .then(function(proyectos){
        res.render('game', {proyectos})
    })
}

export{
    verHome,
    verMobile,
    verLanding,
    verWebApp,
    verEcommerce,
    verGame
}