const btn=document.getElementById('btn');

const div=document.getElementById('info');

btn.onclick= function(){

  var inputValue=document.getElementById('city').value;
  var el=document.querySelector('.hide');


  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&APPID=37ea0caae6efeb037c93b0a3644a6a5f`)
  .then(data=>{ return data.json()})
  .then(data2=>{
    console.log(data2);
    el.style.display="none";
    //getting the sunrise time in 12hr format
    var sec1 = data2.sys.sunrise;
    var date1 = new Date(sec1 * 1000);
    var sunriseTime = date1.toLocaleTimeString();
    //getting sunset time in 12 hr format
    var sec2 = data2.sys.sunset;
    var date2 = new Date(sec2 * 1000);
    var sunsetTime = date2.toLocaleTimeString();

    div.innerHTML = `
    <h2>Current weather for ${data2.name}, ${data2.sys.country}</h2>
    <ul>
     <li class="icon"><img src="http://openweathermap.org/img/w/${data2.weather[0].icon}.png" /><span >${data2.weather[0].description}</span></li>
     <li>Temperature: ${data2.main.temp} <span>&deg;C</span></li>
     <li>Humidity: ${data2.main.humidity} <span>%</span></li>
     <li>Sunrise: ${sunriseTime} </li>
     <li>Sunset: ${sunsetTime} </li>
    </ul>
    `


  })
}
