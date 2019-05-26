exports = module.exports = (loginService) => {
    return {
        async login(req, res, next) {
            let body = req.body;
            let result;
            try {
                result = await loginService.login(body);

                res.send(result);
            } catch (error) {
                next(error);
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['services/loginService'];
