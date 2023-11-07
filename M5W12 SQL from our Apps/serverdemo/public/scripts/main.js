$(document).ready(function() {
  $('#form-user').submit((event) => {
    event.preventDefault();
    const email = $('#email').val()
    const name = $('#name').val()
    const age = $('#age').val()
    $.post('http://localhost:8080/add/user', {email, name, age})
    .then((res) => {
      $('.results').empty()
      $('.results').append(`
        <div>
          <p>${res[0].name}</p>
          <p>${res[0].email}</p>
          <p>${res[0].age}</p>
        </div>
      `)
    })
  })
})