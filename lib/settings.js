exports = module.exports = () => {
    return {
        http: {
            port: process.env.PORT || 3001,
            host: process.env.HOST || '127.0.0.1'
        },
        db: {
            path: './data/data.db'
        }
    }
}

exports['@singleton'] = true;
exports['@async'] = false;
