import Fastify from 'fastify';
import path from 'path';
import fastifyStatic from '@fastify/static';

const PORT = 3000;

// fastify == server
const fastify = Fastify({
   logger: true
});

fastify.register(fastifyStatic, {
   root: path.join(__dirname, 'public'),
   prefix: '/public/',
});

fastify.get('/', async (req, res) => {
   return res.sendFile('index.html');
});

fastify.get('/about', async (req, res) => {
   return res.sendFile('about.html');
});

fastify.get('/contact', async (req, res) => {
   return res.sendFile('contact.html');
});

fastify.get('/404', async (req, res) => {
   return res.sendFile('404.html');
});

fastify.get('/testing/this/path', async (req, res) => {
   return res.sendFile('index.html');
});

const start = async () => {
   try {
      await fastify.listen({ port: PORT });
   } catch (err) {
      fastify.log.error(err);
      process.exit(1);
   }
}

start();
