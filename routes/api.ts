import express, { Request, Response } from "express";
import Email from '../entitties/email';
import { getManager, getConnection } from "typeorm";
const router = express.Router();

// Get users
router.get('/users', async (req, res) => {
    var users = await getManager().find(Email);
    users.length > 0 ? res.json({ 'status': true, 'message': "Record found successfully.", 'data': users }) : res.json({ 'status': false, 'message': 'Record not found', 'data': [] })
});

// Add user
router.post('/users', async (req: Request, res: Response) => {
    let resp = await getConnection().createQueryBuilder().insert().into(Email).values([
        { email: req.body.email },
    ])
        .execute();
    resp ? res.json({ 'status': false, 'message': 'Records Created successfully.', 'data': resp }) : res.json({ 'status': false, 'message': 'Something was wrong.' })
});
module.exports = router;