import *as ProyectosServices from '../../services/proyectos.services.js'


function findall(req, res){
    const filter = {}

    if(req.query.technologies) {
        filter.technologies = req.query.technologies
    }

    if(req.query.section) {
        filter.section = req.query.section
    }

    ProyectosServices.traerProyectosTodos(filter)
    .then(function(proyectos){
        res.status(200).json(proyectos)
    })
}

function crearProyecto(req, res){
    const idCliente = req.params.idCliente
    const proyecto = {
        name : req.body.name,
        description : req.body.description,
        link : req.body.link,
        technologies : req.body.technologies,
        img: "https://picsum.photos/400/225",
        section: req.body.section  
    }

    ProyectosServices.guardarProyecto(proyecto, idCliente)
    .then(function(nuevoProyecto){
        res.status(201).json(nuevoProyecto)
    })
}

function findById(req, res){
    const id = req.params.id

    ProyectosServices.traerPorId(id)
    .then(function(proyecto){
        if (proyecto) {
            res.status(200).json(proyecto)
        }   else {
            res.status(404).json({messagge : "Proyecto no encontrado"})
        }       
    })
}

function editById(req, res){
    const id = req.params.id

    const proyecto = {}

    if(req.body.name) {
        proyecto.name = req.body.name
    }

    if(req.body.description) {
        proyecto.description = req.body.description
    }

    if(req.body.link) {
        proyecto.link = req.body.link
    }

    if(req.body.technologies) {
        proyecto.technologies = req.body.technologies
    }

    if(req.body.section) {
        proyecto.section = req.body.section
    }

    if(req.body.img) {
        proyecto.img = req.body.img
    }

    ProyectosServices.editarProyecto(id, proyecto)
    .then(function(proyecto){
        if (proyecto) {
            res.status(200).json({messagge : "Proyecto editado con éxito."})
        }   else {
            res.status(404).json({messagge : "Proyecto no encontrado"})
        } 
    })
}

function deleteById(req, res){
    const id = req.params.id

    ProyectosServices.eliminarProyecto(id)
    .then(function(proyecto){
        if (proyecto) {
            res.status(200).json({messagge : "Proyecto eliminado con éxito."})
        }   else {
            res.status(404).json({messagge : "Proyecto no encontrado"})
        }       
    })
}

function replaceById(req, res){
    const id = req.params.id

    const proyecto = {
        name : req.body.name,
        description : req.body.description,
        link : req.body.link,
        technologies: req.body.technologies,
        img: req.body.img,
        section: req.body.section,
    }

    ProyectosServices.reemplazarProyecto(id, proyecto)
    .then(function(proyecto){
        if (proyecto) {
            res.status(200).json({messagge : "Proyecto reemplazado con éxito."})
        }   else {
            res.status(404).json({messagge : "Proyecto no encontrado"})
        }       
    })
}

function porCliente(req, res) {
    const idCliente = req.params.idCliente

    ProyectosServices.PorCliente(idCliente)
    .then(function(result){
        res.status(201).json(result)
    })
}


export {
    findall,
    crearProyecto,
    findById,
    editById,
    replaceById,
    deleteById,
    porCliente
}