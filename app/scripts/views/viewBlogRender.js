import $ from 'jquery';
import moment from 'moment';
function viewBlogRender(posts){
  const singlePostContainer= $('<div></div>');

  let id = (location.hash).split('/')[1];
  let currentPost= posts.get(id);

  let postContents= $(`
    <h1>${currentPost.attributes.title}</h1>
    <span class="date">
    ${moment(currentPost.attributes.timestamp).format('MMMM Do YYYY, h:mm:ss a')}
    </span>
    <p>${currentPost.attributes.body}</p>
  `);
singlePostContainer.append(postContents);

return singlePostContainer;
}

export default viewBlogRender;
