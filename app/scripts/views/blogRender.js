import $ from 'jquery';

function blogRender(posts){
  posts.fetch({
	success: function(posts) {
		console.log('fetch success', posts);
    const fullPostContainer=`</div>
    <div class="view-post">
    </div>
    `;
    $('main').append(fullPostContainer);
    const postList=$('<ul></ul>');
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
