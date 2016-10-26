import Backbone from 'backbone';
import session from '../models/session';

export default Backbone.Collection.extend({
  model: session,
  url: 'http://tiny-za-server.herokuapp.com/collections/sessionKeeper'
});
