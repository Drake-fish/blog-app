import Backbone from 'backbone';

const sessionConfig={
  idAttribute: '_id',
  firstName: 'firstName',
  lastName: 'lastName',
  address: 'address',
  telephone: 'telephone',
  defaults:{
    creationDate: new Date()
  },
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/sessionKeeper'
};

const Session= Backbone.Model.extend(sessionConfig);

export default Session;
