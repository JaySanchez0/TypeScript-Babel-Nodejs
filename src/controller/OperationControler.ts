import {Express,Request,Response} from 'express';
import { div, mult, sum } from '../Service/OperationService';

export default function OperationController(server:Express){
    server.get("/suma",(req:Request,res:Response)=>{
        let a: number = parseInt(req.query.a.toString());
        let b: number = parseInt(req.query.b.toString());
        res.send(sum(a,b).toString());
    });

    server.get("/multiplication",(req:Request,res:Response)=>{
        let a: number = parseInt(req.query.a.toString());
        let b: number = parseInt(req.query.b.toString());
        res.send(mult(a,b).toString());
    });

    server.get("/divition",(req:Request,res:Response)=>{
        let a: number = parseInt(req.query.a.toString());
        let b: number = parseInt(req.query.b.toString());
        res.send(div(a,b).toString());
    })
}