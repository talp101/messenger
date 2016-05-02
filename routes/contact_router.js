import express from 'express';

const router = express.Router();

const users = [{userName:'amitn', firstName:'עמית', lastName:'נאמן'},{userName:'israelc', firstName:'ישראל', lastName:'כהן'}, {userName:'goidel', firstName:'גבריאל', lastName:'גוידל'}];

router.route('/')
    .get(function (req, res, next){
        let searchTerm = req.query.q;
        const foundUsers = users.filter((user) => {return user.firstName.includes(searchTerm)});
        res.json(foundUsers);
});


export default router;