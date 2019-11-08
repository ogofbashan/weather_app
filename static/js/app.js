//import config api keyboard
import Config from '../../config.js';

//create a new instance of the config class

let config= new Config();

// load up the header component

$.get('../../components/header.html', function(response) {$('header').html(response);});

// setup a callback function to handle inserting the weather data

function searchCity() {
  //get the search parameter from the input
  let city = $('#city_search').val();

  console.log(city);

  // TODO: hw, implement API to open weather map and display correct info
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${config.getKey()}&units=imperial`;

  console.log(url);

  $.get(url, function(res) {
   console.log(res);

   $('#city_name').text(`${res.name}, ${res.sys.country}`);
   $('#high').html(`${res.main.temp_max.toFixed(0)}&deg; F`);
   $('#low').html(`${res.main.temp_min.toFixed(0)}&deg; F`);
   $('#forcast').html(`${res.weather[0].description}`);
   $('#humidity').html(`${res.main.humidity}%`);

 });
  //show the weather boxes after successful api call
  $('#weather-info').css('display', 'block');
}

// handle when the submit button is clicked

$("#submit-btn").click(function(e) {
  e.preventDefault();
  searchCity();
})

// immediately hide weater info section on load
$('#weather-info').css('display', 'none');
