"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const path_1 = __importDefault(require("path"));
const static_1 = __importDefault(require("@fastify/static"));
const PORT = 3000;
// fastify == server
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.register(static_1.default, {
    root: path_1.default.join(__dirname, 'public'),
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
    }
    catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
