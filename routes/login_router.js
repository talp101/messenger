import express from 'express';

const router = express.Router();

router.route('/')
    .post((req, res, next) => {
        console.log(req.body);
        res.json(req.body);
    });

export default router;