const DataStore = require("nedb");

exports = module.exports = settings => {
  // configs for db
  const db = new DataStore({
    filename: settings.db.path,
    autoload: true,
    timestampData: true
  });


  // We wrap each function in a Promise
  // TODO see if you can make it more clean, see anything that is repeting?
  // see D.R.Y. concept
  return {
    insert(doc) {
      return new Promise((resolve, reject) => {
        db.insert(doc, function(err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
      });
    },
    getAll() {
      return new Promise((resolve, reject) => {
        db.find({}, function(err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
      });
    },
    removeOneById(id) {
      return new Promise((resolve, reject) => {
        db.remove({ _id: id }, function(err, result) {
          if (err) {
            return reject(err);
          }
          return resolve(result);
        });
      });
    },
    updateOneById(id, data) {
      return new Promise((resolve, reject) => {
        db.find({ _id: id }, function(err, result) {
          if (err) {
            return reject(err);
          } else {
            db.update({ _id: id }, data, function(err, result) {
              if (err) {
                return reject(err);
              }
              return resolve(result);
            });
          }
        });
      });
    }
  };
};

exports["@singleton"] = true;
exports["@async"] = false;
exports["@require"] = ["lib/settings"];
