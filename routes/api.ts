//import express from 'express';
import express, { Request, Response } from "express";
import { User } from '../entitties/User';
import { getManager, getConnection } from "typeorm"; 
const router = express.Router();

router.get('/users', async (req, res) => {
    var users = await getManager().find(User);
    users.length > 0 ? res.json({'status': true, 'message': "Record found successfully.", 'data': users}) : res.json({'status': false, 'message': 'Record not found', 'data': []})
});

//req: Request, res: Response
router.post('/users', async (req: Request, res: Response) => {
    let resp = await getConnection().createQueryBuilder().insert().into(User).values([
            { email: req.body.email},
        ])
        .execute();
        resp ? res.json({'status': false, 'message': 'Records Created successfully.', 'data': resp}) : res.json({ 'status': false, 'message': 'Something was wrong.'}) 
});
module.exports = router;