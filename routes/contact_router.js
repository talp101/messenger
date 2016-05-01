import express from 'express';

const router = express.Router();

router.route('/')
    .get(function (req, res, next){
        res.json([{userName:'talp'},{userName:'amitn'},{userName:'israelc'}]);
        });


export default router;