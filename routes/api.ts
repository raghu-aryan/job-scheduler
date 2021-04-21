//import express from 'express';
import express, { Request, Response } from "express";
import { User } from '../entitties/User';
import { getManager, getRepository, getConnection } from "typeorm"; 
const router = express.Router();

router.get('/users', async (req, res) => {
    var users = await getManager().find(User);
    res.json({status: true, data: users});
});

//req: Request, res: Response
router.post('/users', async (req: Request, res: Response) => {
    console.log(req.body);
    //var users = await getManager().find(User);
    //res.json({status: true, data: users});

    let resp = await getConnection().createQueryBuilder().insert().into(User).values([
            { email: req.body.email},
        ])
        .execute();
        resp ? res.json({'status': false, 'message': 'Records Created successfully.', 'data': resp}) : res.json({ 'status': false, 'message': 'Something was wrong.'}) 
});
module.exports = router;