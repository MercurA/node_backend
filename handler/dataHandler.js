exports = module.exports = (dataService) => {
    return {
        async getData(req, res, next) {
            let result;

            try {
                result  = await dataService.getData();

                res.send(result);
            } catch (error) {
                next(error);
            }
        },
        async addData(req, res, next) {
            let body = req.body;
            let result;
            try {
                result = await dataService.addData(body);

                res.send(result);
            } catch (error) {
                next(error);
            }
        },
        async removeData(req, res, next) {
            let id = req.params.id;
            let result;
            try {
                result = await dataService.removeData(id);

                res.send(result);
            } catch (error) {
                next(error);
            }
        },
        async updateData(req, res, next) {
            let id = req.params.id;
            let body = req.body;
            let result;

            try {
                result = dataService.updateData(id, body);
                
                res.send(result);
            } catch (error) {
                next(error);
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['services/dataService']