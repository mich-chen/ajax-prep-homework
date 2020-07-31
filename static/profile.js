
// function submitProfile(evt) {
//     evt.preventDefault();

//     $.post("/profile",
//       // the data will be the serialized #profile-form that is JSON
//         $('#profile-form').serialize(),
//         function (result) {
//             $('#profiles').append("<p>" + "Name: " + result.fullname + "</p>");
//         }
//     );
// }

$("#profile-form").on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    name: $('#name-field').val(),
    age: $('#age-field').val(),
    occupation: $('#occupation-field').val()
  };

  $.post('/profile', formData, (response) => {
    $('#profiles').append(`
      <li>${response.fullname} the ${response.occupation} is ${response.age}</li>
    `);
  });
});
