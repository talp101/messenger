import express from 'express';
import User from '../models/User';

const router = express.Router();

router.route('/')
    .get(function (req, res, next){
        const searchTerm = req.query.q;
        const re = new RegExp(searchTerm, 'i');
        User.find().or([
          {'firstName':{$regex:re}}, {'lastName':{$regex:re}}, {'userName':{$regex:re}}
        ]).exec((err, foundUsers) => {
          res.json(foundUsers);
        })
});


export default router;
