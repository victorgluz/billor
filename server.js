// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write("oi");

//     return response.end();
// })

// server.listen(3333)
// localhost:3333

import { fastify } from 'fastify'
//import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

const database = new DatabasePostgres()

server.get('/', () => {
    return 'API REST Billor V1.0'
})

server.post('/trucks', async (request, reply) => {
    const { model, license_plate, year, operation_status } = request.body
    
    await database.create({
        model,
        license_plate,
        year,
        operation_status
    })

    return reply.status(201).send()
})

server.get('/trucks', async (request) => {
    const search = request.query.search

    const trucks = await database.list(search)
    return trucks
})

server.put('/trucks/:id', (request, reply) => {
    const truckId = request.params.id
    const { model, license_plate, year, operation_status } = request.body

    const truck = database.update(truckId, {
        model,
        license_plate,
        year,
        operation_status
    })

    return reply.status(204).send()
})

server.delete('/trucks/:id', async (request, reply) => {
    const truckId = request.params.id

    await database.delete(truckId)

    return reply.status(204).send()
})

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3000,
})

