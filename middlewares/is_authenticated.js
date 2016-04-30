import jwt from 'jsonwebtoken';

const secretKey = 'tagidliadmataisheshshanimveday';

const isAuthenticated = (req, res, next) => {
    const token = req.body.token || req.params.token || req.headers['x-access-token'];

    if (token){
        jwt.verify(token,secretKey, (err, decoded) => {
            if(err){
                console.log(err);
                return res.json({success:false, message:'Failed to authenticate token.'});
            } else{
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided'
        });
    }
};

export default isAuthenticated;