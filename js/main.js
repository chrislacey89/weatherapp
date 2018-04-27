
//http://api.wunderground.com/api/44378a2af565076c/forecast10day/conditions/q/CA/San_Francisco.json

$(document).ready( () => {
    getLocation();
    let latitude;
    let longitude;
    let currentPosition;
    let fetchedLocal = localStorage.getItem('location');


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);

            function showPosition(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
                currentPosition = `http://api.wunderground.com/api/44378a2af565076c/forecast10day/conditions/q/${latitude},${longitude}.json`
                localStorage.setItem('location', currentPosition);
                
            }
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }

    }
 // Load new Quote
    function dayForecastF() {
        $.ajax({
            
            url: fetchedLocal,
            dataType: 'json',
            data: {
                format: 'json'
            },
            success: function (response) {

                const forecastDay = response.forecast.txt_forecast.forecastday;
                const highLow = response.forecast.simpleforecast.forecastday;
                const cityAndState = response.current_observation.display_location.full;

                const currentTempF = response.current_observation.temp_f;
                const currentTempC = response.current_observation.temp_c;

                console.log(currentTempC);

// MAIN DISPLAY               
// DAY OF WEEK

document.getElementById('currentTemp').innerHTML = `${currentTempF}° `

    document.getElementById('mainCity').innerHTML = `${cityAndState}`;
// ICON
document.getElementById('mainDayIcon').innerHTML = `<h1 class="wu wu-white wu-256 wu-${forecastDay[0].icon}"></h1>`;
// FORECAST TEXT
    document.getElementById('mainDayText').innerHTML = forecastDay[0].fcttext;

// DAY 1              
// DAY OF WEEK
    document.getElementById('day1').innerHTML = forecastDay[2].title;
// ICON
    document.getElementById('dayIcon1').innerHTML = `<h1 class="wu wu-white wu-64 wu-${forecastDay[2].icon}"></h1>`;
// HIGH
     document.getElementById('dayHigh1').innerHTML = highLow[2].high.fahrenheit;
// LOW
     document.getElementById('dayLow1').innerHTML = highLow[2].low.fahrenheit;

     
// DAY 2              
// DAY OF WEEK
    document.getElementById('day2').innerHTML = forecastDay[4].title;
// ICON
    document.getElementById('dayIcon2').innerHTML = `<h1 class="wu wu-white wu-64 wu-${forecastDay[4].icon}"></h1>`;
// HIGH
     document.getElementById('dayHigh2').innerHTML = highLow[2].high.fahrenheit;
// LOW
     document.getElementById('dayLow2').innerHTML = highLow[2].low.fahrenheit;

// DAY 3              
// DAY OF WEEK
    document.getElementById('day3').innerHTML = forecastDay[6].title;
// ICON
    document.getElementById('dayIcon3').innerHTML = `<h1 class="wu wu-white wu-64 wu-${forecastDay[6].icon}"></h1>`;
// HIGH
     document.getElementById('dayHigh3').innerHTML = highLow[2].high.fahrenheit;
// LOW
     document.getElementById('dayLow3').innerHTML = highLow[2].low.fahrenheit;

// DAY 4              
// DAY OF WEEK
    document.getElementById('day4').innerHTML = forecastDay[8].title;
// ICON
    document.getElementById('dayIcon4').innerHTML = `<h1 class="wu wu-white wu-64 wu-${forecastDay[8].icon}"></h1>`;
// HIGH
     document.getElementById('dayHigh4').innerHTML = highLow[2].high.fahrenheit;
// LOW
     document.getElementById('dayLow4').innerHTML = highLow[2].low.fahrenheit;

// DAY 5              
// DAY OF WEEK
    document.getElementById('day5').innerHTML = forecastDay[10].title;
// ICON
    document.getElementById('dayIcon5').innerHTML = `<h1 class="wu wu-white wu-64 wu-${forecastDay[10].icon}"></h1>`;
// HIGH
     document.getElementById('dayHigh5').innerHTML = highLow[9].high.fahrenheit;
// LOW
     document.getElementById('dayLow5').innerHTML = highLow[9].low.fahrenheit;

            }
        });
    }

    
    dayForecastF();






document.getElementById('cBtn').onclick = function dayForecastC() {
    getLocation();

    $.ajax({
        url: fetchedLocal,
        dataType: 'json',
        data: {
            format: 'json'
        },
        success: function (response) {
            console.log(fetchedLocal);


            const currentTempC = response.current_observation.temp_c;

            let forecastDay = response.forecast.txt_forecast.forecastday;
            var highLow = response.forecast.simpleforecast.forecastday;
            // FORECAST TEXT
            document.getElementById('currentTemp').innerHTML = `${currentTempC}° `

            document.getElementById('mainDayText').innerHTML = forecastDay[0].fcttext_metric;

  
            // DAY 1
            // HIGH
            document.getElementById('dayHigh1').innerHTML = highLow[2].high.celsius;
            // LOW
            document.getElementById('dayLow1').innerHTML = highLow[2].low.celsius;

            // DAY 2
            // HIGH
            document.getElementById('dayHigh2').innerHTML = highLow[4].high.celsius;
            // LOW
            document.getElementById('dayLow2').innerHTML = highLow[4].low.celsius;

            // DAY 3
            // HIGH
            document.getElementById('dayHigh3').innerHTML = highLow[6].high.celsius;
            // LOW
            document.getElementById('dayLow3').innerHTML = highLow[6].low.celsius;

            // DAY 4
            // HIGH
            document.getElementById('dayHigh4').innerHTML = highLow[8].high.celsius;
            // LOW
            document.getElementById('dayLow4').innerHTML = highLow[8].low.celsius;

            // DAY 5
            // HIGH
            document.getElementById('dayHigh5').innerHTML = highLow[9].high.celsius;
            // LOW
            document.getElementById('dayLow5').innerHTML = highLow[9].low.celsius;
        }
    });
};

document.getElementById('fBtn').onclick = function dayForecastF() {
    $.ajax({
        url: fetchedLocal,
        dataType: 'json',
        data: {
            format: 'json'
        },
        success: function (response) {
            const currentTempF = response.current_observation.temp_f;

            let forecastDay = response.forecast.txt_forecast.forecastday;
            let highLow = response.forecast.simpleforecast.forecastday;
            // FORECAST TEXT
document.getElementById('currentTemp').innerHTML = `${currentTempF}° `;

            document.getElementById('mainDayText').innerHTML = forecastDay[0].fcttext;

            // // HIGH
            // document.getElementById('mainHigh').innerHTML = highLow[0].high.fahrenheit;
            // // LOW
            // document.getElementById('mainLow').innerHTML = highLow[0].low.fahrenheit;

            // DAY 1
            // HIGH
            document.getElementById('dayHigh1').innerHTML = highLow[2].high.fahrenheit;
            // LOW
            document.getElementById('dayLow1').innerHTML = highLow[2].low.fahrenheit;

            // DAY 2
            // HIGH
            document.getElementById('dayHigh2').innerHTML = highLow[4].high.fahrenheit;
            // LOW
            document.getElementById('dayLow2').innerHTML = highLow[4].low.fahrenheit;

            // DAY 3
            // HIGH
            document.getElementById('dayHigh3').innerHTML = highLow[6].high.fahrenheit;
            // LOW
            document.getElementById('dayLow3').innerHTML = highLow[6].low.fahrenheit;

            // DAY 4
            // HIGH
            document.getElementById('dayHigh4').innerHTML = highLow[8].high.fahrenheit;
            // LOW
            document.getElementById('dayLow4').innerHTML = highLow[8].low.fahrenheit;

            // DAY 5
            // HIGH
            document.getElementById('dayHigh5').innerHTML = highLow[9].high.fahrenheit;
            // LOW
            document.getElementById('dayLow5').innerHTML = highLow[9].low.fahrenheit;


        }
    });
};



// Change locatiion event

document.getElementById('w-change-btn').addEventListener('click', function(e){
 const city = document.getElementById('city').value;
 const state = document.getElementById('state').value;

    fetchedLocal = `http://api.wunderground.com/api/44378a2af565076c/forecast10day/conditions/q/${state}/${city}.json`;

    console.log(fetchedLocal);
    
    dayForecastF();
    $('#locationModal').modal('hide');
   
})

}); // end of load 
