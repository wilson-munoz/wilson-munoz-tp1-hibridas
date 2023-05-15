import *as ClienteServices from '../../services/clientes.services.js'

function findall(req, res){
    ClienteServices.trearClientes()
    .then(function(clientes){
        res.status(200).json(clientes)
    })
}

function crearCliente(req, res){

    const cliente = {
        nombre : req.body.nombre,
        descripcion: req.body.descripcion,
        foto: req.body.foto
    }

    ClienteServices.create(cliente)
    .then(function(nuevocliente){
        res.status(201).json(nuevocliente)
    })
}

function findProjects(req, res) {
    const idCliente = req.params.idCliente

    GaleriaServices.findAll(idCliente)
    .then(function(result){
        res.status(201).json(result)
    })
}

export {
    findall,
    crearCliente,
    findProjects
}