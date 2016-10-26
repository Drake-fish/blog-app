import Backbone from 'backbone';
import Post from '../models/blogPost';

export default Backbone.Collection.extend({
  model:Post,
  url: 'http://tiny-za-server.herokuapp.com/collections/DrakesblogPosts'

});
