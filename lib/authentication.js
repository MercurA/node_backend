const jwt = require('jsonwebtoken');

exports = module.exports = () => {
    return {
        /**
         * @param {string} email 
         */
        register(email) {
            if(email.length > 0) {
                let token = jwt.sign({email: email}, email, {expiresIn: '10h'});

                return token;
            }
        },
        verify(req, res, next) {
            let now = new Date();
            let email = req.headers.email;
            let token = req.headers.authorization.slice(7);
            let result = jwt.verify(token, email); 

            if(now > result.exp){
                next();
            } else {
                return 'Invalid Token';
            }

        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
