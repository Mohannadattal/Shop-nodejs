const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb+srv://mohannad:V3rTHefsIB@cluster0.gf0jqk6.mongodb.net/'
  )
    .then((client) => {
      console.log('Connected!');
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
