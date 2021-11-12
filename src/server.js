const http = require('http');
const express = require('express');
const { readFile, writeFile } = require('fs/promises');
const path = require('path');

const server = express();

server.use(express.json());

const routes = {
    '/tasks': async (request, response) => {
        const filePath = './database/tasks.json';
        const task = request.body;
        const content = JSON.parse(await readFile(filePath));
        console.log('content', content)
        content.push(task);
        await writeFile(filePath, JSON.stringify(content));
        return response.json({ status: 'ok' });
    },
    default: (request, response) => {
        response.write('hello world!');
        return response.end();
    }

}

server.post('/tasks', routes['/tasks'])

const app = server.listen(3000, () => console.log("new app runing at ", 3000));

module.exports = app;


