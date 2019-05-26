exports = module.exports = (auth, responses) => {
    return {
        /**
         * @param {object} body 
         */
        async login(body) {
            if (body) {
                let token = await auth.register(body.email);

                if(token) {
                    return responses.onSuccess(token);
                } else {
                    return responses.onFailure('Invalid token');
                }
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/authentication', 'lib/responses'];
