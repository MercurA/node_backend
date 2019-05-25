exports = module.exports = (response, dataModel) => {
    return {
        async getData() {
            let result = await dataModel.getAll();
            // we check if result is valid/exists
            // only after we make calls to db
            if(result) {
                return response.onSuccess(result);
            } else {
                return response.onFailure('Nothing to show...y\'all');
            }
        },
        /**
         * @var {Promise<object>} result
         * @param {object} data 
         */
        async addData(data) {
            let result = await dataModel.insert(data);

            // we check if result is valid/exists
            // only after we make calls to db
            if(result) {
                return response.onSuccess(result);
            } else {
                return response.onFailure('Nothing to show...y\'all');
            }
        },
        /**
         * 
         * @param {string} id 
         */
        async removeData(id) {
            let result;
            // we check if id is valid/exists
            // only after we make calls to db
            if(id) {
                result = await dataModel.removeOneById(id);

                return response.onSuccess(result);
            } else {
                return response.onFailure('Nothing to show...y\'all');
            }
        },
        /**
         * 
         * @param {string} id 
         * @param {object} data
         */
        async updateData(id, data) {
            let result;
            // we check if data/id are valid/exist
            // only after we make calls to db
            if(id && data) {
                result = dataModel.updateOneById(id, data);

                return response.onSuccess(result);
            } else {
                return response.onFailure('Nothing to show...y\'all');
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
exports['@require'] = ['lib/responses', 'models/dataModel'];