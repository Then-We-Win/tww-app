const { Service } = require('feathers-mongodb');

exports.Config = class Users extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('config');
    });
  }
};
