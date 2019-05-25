exports = module.exports = () => {
    return {
        onSuccess(data) {
            return {
                data: data,
                success: true
            }
        },
        onFailure(msg) {
            return {
                message: "Something went wrong" || msg,
                success: false
            }
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
