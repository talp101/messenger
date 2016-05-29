import passport from 'passport';
import WindowsStrategy from 'passport-windowsauth';
import config from '../config/dev';

passport.use(new WindowsStrategy(
   config.ldapConfig, (profile, done) => {
    User.findOrCreate({ waId: profile.id }, function (err, user) {
        done(err, user);
    });
}));


const authenticateUserFromRequest  = (requset, response, next) => {
    let userName = requset.body.username;
    password.authenticate('WindowsAuthentication', (err, userData) => {
        if(err)
            console.log(err);
        if(!userData){
            const error = new Error('UnAuthorized - bad password or username');
            console.log(error);
        }
        else{
            filterUserData(userData, res, userName);
        }
    })
}

const filterUserData = (userData, respone, userName) => {
    let filteredUserData = {};
    filteredUserData['username'] = userName;
    config.userDataOptions.fieldsToReturn.forEach(field => {
        filteredUserData[field] = userData["_json"][field];
    })
}