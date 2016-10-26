import $ from 'jquery';

function viewBlogRender(posts){
  const singlePostContainer= $('<div></div>');
  let id = (location.hash).split('/')[1];
  let currentPost= posts.get(id);

  let postContents= $(`
    <h1>${currentPost.attributes.title}</h1>
    <p>${currentPost.attributes.body}</p>
    <span class="date">
    ${currentPost.attributes.timestamp}
    </span>`);
singlePostContainer.append(postContents);
return singlePostContainer;
}

export default viewBlogRender;
