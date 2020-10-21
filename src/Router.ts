import {Express,Request,Response} from 'express';

export default function router(server:Express){
    server.get("/",(req:Request,res:Response)=>{
        res.send("Hola Mundo");
    });
}