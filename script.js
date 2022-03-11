//DOM Manipulation

//event listner

const cityform = document.querySelector('form');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

const updateCity = async(city) => {
    const citydetails = await getcity(city);
    const weather = await getweather(citydetails.Key);
    return {citydetails,weather}
}


cityform.addEventListener('submit', (e) =>{
    e.preventDefault();
    const city = cityform.city.value.trim();
    cityform.reset(); 

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err))

    // updateCity(city)
    // .then(data => updateUI(data))
})

//update UI

const card = document.querySelector('.card');
const details = document.querySelector('.details');

const updateUI = (data) => {
    // const citydetails = data.citydetails;
    // const weather = data.weather;

    const {citydetails, weather} = data;
    var w = Math.round(weather.Temperature.Metric.Value);
    console.log(w);
    console.log(citydetails, weather);
    details.innerHTML = `
        <h5 class="my-5" style="color: white;">${citydetails.EnglishName}</h5>
        <div class="my-3" style="color: white;">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span style="color: white;">${w}</span>
            <span style="color: white;">&deg;C</span>
        </div>
    `
    
    let timeSource = null;

    if (weather.IsDayTime){
        timeSource = 'DayNightSvg/Day.svg'
    }else{
        timeSource = 'DayNightSvg/Night.svg'
    }

    time.setAttribute('src',timeSource);

    let iconSource = `animated/${weather.WeatherIcon}.svg`
    icon.setAttribute('src',iconSource)


}

//DATABASE CONNECTION
function Send_Data(){
    var cityName = document.getElementById("cname").value;

    var httpr = new XMLHttpRequest();
    httpr.open("POST", "weather.php", true);
    httpr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    httpr.onreadystatechange = function(){
        if(httpr.readyState==4 && httpr.status==200){
            document.getElementById("response").innerHTML.responseText;
        }
    }
    httpr.send("cityname="+cityName);
}
