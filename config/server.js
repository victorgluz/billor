import { fastify } from 'fastify'
import truckRoutes from '../routes/truckRoutes.js';

const server = fastify()

const app = fastify();

app.register(truckRoutes);

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3000,
})
