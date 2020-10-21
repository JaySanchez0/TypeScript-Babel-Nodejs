import express from 'express';
import OperationController from './controller/OperationControler';

const server = express();
server.use(express.json());

OperationController(server);

server.listen(80,"0.0.0.0",()=>{
    console.log("Listen");
});

