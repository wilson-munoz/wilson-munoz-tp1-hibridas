import { MongoClient, ObjectId } from "mongodb";
const client = new MongoClient('mongodb://127.0.0.1:27017')

async function trearClientes(){
    return client.connect()
    .then(function(){
        const db =  client.db('AH20231CP1')
        return db.collection('Cliente').find().toArray()
    })
}

async function create (cliente) {

    const newCliente = {
        ...cliente
    }

    return client.connect()
    .then(async function(){
        const db =  client.db('AH20231CP1')
        return db.collection('Cliente').insertOne(newCliente)
    })
}

export {
    trearClientes,
    create
}