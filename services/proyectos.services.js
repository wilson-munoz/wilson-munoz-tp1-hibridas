import { MongoClient, ObjectId} from "mongodb"
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function traerMobile(){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').find({section:"mobile"}).toArray()
    })
    .catch(function(err){

    })
}

async function traerLanding(){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').find({section:"landing"}).toArray()
    })
    .catch(function(err){

    })
}

async function traerEcommerce(){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').find({section:"ecommerce"}).toArray()
    })
    .catch(function(err){

    })
}

async function traerwebApp(){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').find({section:"webApp"}).toArray()
    })
    .catch(function(err){

    })
}

async function traerGame(){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').find({section:"game"}).toArray()
    })
    .catch(function(err){

    })
}

async function traerProyectosTodos(filter){

    const filterQuery =  {
        ...filter
    }

    if(filterQuery.technologies) {
        filterQuery.technologies = {$regex : filterQuery.technologies, $options: 'i'}
    }

    if(filterQuery.section) {
        filterQuery.section = {$regex : filterQuery.section, $options: 'i'}
    } 

    return client.connect()
    .then(async function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').find(filterQuery).toArray()
    })
}

async function traerPorId(id){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').findOne({ _id: new ObjectId(id) })
    })
}

async function guardarProyecto(proyecto, id){
    const nuevoProyecto = {
        ...proyecto,
        cliente_id : new ObjectId(id)
    }
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').insertOne(nuevoProyecto)
    })
    .then(function(){
        return nuevoProyecto
    })
}

async function editarProyecto(id, proyecto){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').updateOne({_id: new ObjectId(id)}, {$set:proyecto})
    })
}

async function reemplazarProyecto(id, proyecto){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').replaceOne({_id: new ObjectId(id)},proyecto)
    })
}

async function eliminarProyecto(id){
    return client.connect()
    .then(function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').deleteOne({_id: new ObjectId(id)})
    })
}

async function PorCliente(id){


    const filter = {
        cliente_id : new ObjectId(id)
    }


    return client.connect()
    .then(async function(){
        const db = client.db('AH20231CP1')
        return db.collection('Projects').find(filter).toArray()
    })
}

export{
    traerProyectosTodos,
    traerPorId,
    guardarProyecto,
    editarProyecto,
    reemplazarProyecto,
    eliminarProyecto,
    traerMobile,
    traerLanding,
    traerEcommerce,
    traerwebApp,
    traerGame,
    PorCliente,
}