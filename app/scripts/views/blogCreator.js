import $ from 'jquery';


function blogCreator(posts){
  const element=$(`
    <form class="new-post">
        <input type="text" name="title" placeholder="What's the title?">
        <textarea placeholder="write something nice!"></textarea>
        <input type="submit" name="name" value="save">
    </form>
    `);
    element.on('submit', (e)=>{
      e.preventDefault();
      const title=$(element).find('input[type="text"]').val();
      const body= $(element).find('textarea').val();
      posts.create({title,body},{
        success: () => {
          console.log(posts);
          console.log('it workess!!');
          location.hash= '';
        }
      });
    });
    return element;
}

export default blogCreator;
