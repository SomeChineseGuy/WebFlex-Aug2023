// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const api_key = '3b5c51a03cca3b792e0b9c218f807acd';

const renderWeather = (weather) => {
  $('#results').html(`
    <div>
      <h1>The city is: ${weather.name}</h1>
      <p>The current weather is: ${weather.weather[0].main} </p>
      <p>The Temp is ${weather.main.temp}</p>
      <p>The wind speed is: ${weather.wind.speed}km/h</p>
    </div>
  `)
};

const renderDogs = (dogs) => {
  $('#results').empty();
  for(let dog of dogs) {
    $('#results').append(`<p>The name is ${dog.name}, the breed is ${dog.breed} and the weight is ${dog.weight} </p>`)
  }
} 

$(document).ready(function() {
  // Target
  // Add Event Listener
  // Effect <---- this can mean alot of things
  $('.box-one').on('click', ()=>{
    $('.box-two').css('background', 'purple')
  })

  $('.box-two').on('click', () => {
    $('#results').append('<p>This is new</p>')
  })

  // $('.box-three').on('click', ()=> {
  //   // $('div').css('padding', '100px')
  //   $('.box-one').addClass("purple")
  //   $('.box-one h2').text("Something cool")
  // })

  // $('.box-three').on('click', () => {
  //   $.get(`https://api.openweathermap.org/data/2.5/weather?q=vancouver&units=metric&appid=${api_key}`, (res) => {
  //     //  Adding CSS - add a class, update the css
  //     //  updating html
  //     renderWeather(res)
  //   })
  // })

  $('.box-three').on('click', () => {
    $.get('/dogs', (res)=> {
      console.log(res);
      renderDogs(res)
      // $('#results').prepend(`The name is ${res[0].name} and the breed is ${res[0].breed}</p>`)
    })
  })

  $('.dog-form').on('submit', (event) => {
    event.preventDefault();
    const $form = $('.dog-form')
    const data = $form.serialize();
    console.log(data);
    $.post('/dogs', data).then(res => {
      console.log(res);
      renderDogs(res)
    })
  })
})