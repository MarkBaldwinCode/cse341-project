const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const CONNECTION_STRING = 'mongodb+srv://mjbaldwin:ImeuJHQ2JSCxhNHo@cluster0.whfui.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

let _db;

const mongoConnect = callback => {
    MongoClient.connect(CONNECTION_STRING)
        .then(client => {
            console.log('connected');
            _db = client.db();

            if (typeof callback === 'function') {
                callback();
            }
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'No Database found';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;