import $ from 'jquery';


function userSettings(profiles){
  const form =$(`
    <form class="newProfile">
      <input type="text" name="first-name" placeholder="First Name" value="">
      <input type="text" name="last-name" placeholder="Last Name" value="">
      <input type="text" name="address" placeholder="Address" value="">
      <input type="tel" name="telephone" placeholder="Phone Number" value="">
      <input type="text" name="address" placeholder="Address" value="">
      <input type="submit" name="name" value="Save">
    </form>
      `);

      form.on('submit', (e) =>{
        e.preventDefault();
        const firstName= $(form).find('input[name="first-name"]').val();
        const lastName= $(form).find('input[name="last-name"]').val();
        const address= $(form).find('input[name="address"]').val();
        const phoneNumber=$(form).find('input[name="telephone"]').val();
        profiles.create({firstName, lastName, address, phoneNumber}, {
          success: () => {
            console.log('profile created!');
            alert('Your Profile has been saved!');
            location.hash="";
          }
      });
    });
    return form;

}

export default userSettings;
