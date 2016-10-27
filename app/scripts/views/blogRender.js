import $ from 'jquery';

function blogRender(posts){
  posts.fetch({
	success: function(posts) {
		console.log('fetch success', posts);
    const postList=$('<ul class="post-nav"></ul>');
    posts.forEach(function(post,i, arr){
      console.log(post);
      let singlePost=`
    <li class="${post.attributes._id}">
    <p>${post.attributes.title}</p>
    </li>
      `;
      postList.append(singlePost);
      $('main').append(postList);
      $(`.${post.attributes._id}`).on('click', (e) =>{
        location.hash=`posts/${post.attributes._id}`;
      });
    });
  }
});

}

export default blogRender;
