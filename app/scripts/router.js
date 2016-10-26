import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import blogPosts from './Collections/blogPosts';
import blogRender from './views/blogRender';
import Post from './views/blogCreator';
import userSettings from './views/userSettings';
import viewBlogRender from './views/viewBlogRender';

let posts= new blogPosts();
const main= $('main');
const singlePost=$('.single-post');

const routerSettings={
  routes:{
    'posts/:id' : 'viewBlogRender',
    ''          : 'blogRender',
    'write'     : 'blogCreator',
    'info'      : 'userInfo',
  },
  blogRender: () =>{
    main.empty();
    singlePost.empty();
  main.append(blogRender(posts));
  },
  blogCreator: () =>{
    singlePost.empty();
    main.empty();
    main.append(Post(posts));
  },
  userInfo: () =>{
    main.empty();
    userInfo();
  },
  viewBlogRender: () =>{
    singlePost.empty();
    singlePost.append(viewBlogRender(posts));

  }
};

const Router= Backbone.Router.extend(routerSettings);

var router= new Router();

export default router;
