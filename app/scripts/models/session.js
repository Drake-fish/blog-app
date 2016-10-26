import Backbone from 'backbone';

const sessionConfig={
  idAttribute: '_id',
  defaults:{

  },
  urlRoot: 'http://tiny-za-server.herokuapp.com/collections/sessionKeeper'
};

const Session= Backbone.Model.extend(sessionConfig);

export default Post;
