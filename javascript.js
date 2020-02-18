//Declared Variables 
var pastSearches = []
var lat
var lon

//Setting Date
var date = (moment().format("L"))







//trying to retrieve local storage for list 
retrieveDailyWeatherStorage()
retrieveListStorage()
function retrieveListStorage() {
    if (localStorage.getItem("pastSearches") !== null) {
        var prevSearches = []
        prevSearches = localStorage.getItem("pastSearches").split(",").reverse()
        console.log("TCL: retrieveStorage -> prevSearches", prevSearches)
        for(i=0 ;i<prevSearches.length && i<5; i++ ){
            pastSearches.push(prevSearches[i])
        }
        
        console.log(pastSearches)

        //    prevSearchesArray.push(prevSearches)
        //    console.log("TCL: retrieveStorage -> prevSearchesArray", prevSearchesArray)
        for (i = 0; i < 5 && i <prevSearches.length; i++) {
            let searchItem = $("<li>")
            searchItem.text(prevSearches[i])
            $(".list").append(searchItem)
        }
    }
}





//if (localStorage.getItem("2PM") === null) {
//} else {

//Retrieving local storage for weather divs 
function retrieveDailyWeatherStorage() {
    var localWeatherDiv = $("<div>")
    if (localStorage.getItem("InitialCity") !== null && localStorage.getItem("initialWeather") !== null && localStorage.getItem("initialTempFixed") !== null && localStorage.getItem("initialHumidity") !== null && localStorage.getItem("initialWindSpeed") !== null && localStorage.getItem("initalUvIndex") !== null) {
        var LocalCityDiv = $("<div>").addClass("bigger")
        var LocalCity = localStorage.getItem("InitialCity")


        var localWeather = localStorage.getItem("initialWeather")
        var localWeatherAnimation = $("<span>")
        console.log("TCL: retrieveDailyWeatherStorage -> LocalWeatherAnimation", localWeatherAnimation)
        


        // applying class to weather animation span 

        if (localWeather === "Clouds") {
            localWeatherAnimation.addClass("fas fa-cloud fa-2x")
        } else if (localWeather === "Rain") {
            localWeatherAnimation.addClass("fas fa-cloud-rain fa-2x")
        } else if (localWeather === "Clear") {
            localWeatherAnimation.addClass("far fa-sun fa-2x")
        } else if (localWeather === "Snow") {
            localWeatherAnimation.addClass("fas fa-snowflake fa-2x")
        }else if (localWeather === "Mist") {
            localWeatherAnimation.addClass("fas fa-cloud-rain fa-2x")
        }else if (localWeather === "Haze") {
            localWeatherAnimation.addClass("fas fa-smog fa-2x")
        }
        LocalCityDiv.text(LocalCity + " " + date + " ");
        LocalCityDiv.append(localWeatherAnimation)


        //temperature---------------------------------------------------------------
        var localTempF = localStorage.getItem("initialTempFixed")

        var LocalTempDiv = $("<div>")
        LocalTempDiv.text("Temperature : " + localTempF + "F").addClass("tempClass")


        // Humidity
        var localHumidity = localStorage.getItem("initialHumidity")
        var localHumidityDiv = $("<div>")
        localHumidityDiv.text("Humidity :  " + localHumidity + " %").addClass("humidity")

        // Wind Speed
        var localWindSpeed = localStorage.getItem("initialWindSpeed")
        var localWindSpeedDiv = $("<div>")
        localWindSpeedDiv.text("Wind Speed : " + localWindSpeed + " MPH").addClass("windSpeed")


        //UV Index 
        var localUvIndexDiv = $("<div>")
        var localUvIndex = localStorage.getItem("initalUvIndex")
        var localUvIndexSpan = $("<span>")
        localUvIndexDiv.text("UV Index:  ").addClass("UvIndex")
        localUvIndexDiv.append(localUvIndexSpan)
        localUvIndexSpan.text(localUvIndex)

        if (localUvIndex <= 3){
            localUvIndexSpan.addClass("low")
        }else if(localUvIndex > 7.01){
            localUvIndexSpan.addClass("high")
        }else if(3.1 <= localUvIndex <= 6.9){
            localUvIndexSpan.addClass("medium")
        }



        //Appending to page
        $(localWeatherDiv).append(LocalCityDiv, LocalTempDiv, localHumidityDiv, localWindSpeedDiv, localUvIndexDiv)
        $("#dayForcast").append(localWeatherDiv)
    }

















    //For Day One 
    var localNextDayDiv = $("<div>")
    if (localStorage.getItem("nextDayDate") !== null && localStorage.getItem("weatherNextDay") !== null && localStorage.getItem("fNextDay") !== null && localStorage.getItem("nextDayHumidity") !== null) {

        // GET Date 
        var localNextDayDate = localStorage.getItem("nextDayDate")
        console.log(localNextDayDate)
        var LocalNextDayDateDiv = $("<div>").addClass("head")
        LocalNextDayDateDiv.text(localNextDayDate)

        //Get weather 
        var LocalWeatherNextDay = localStorage.getItem("weatherNextDay")
        var LocalWeatherNextDayDiv = $("<div>")

        // If statement for weather
        if (LocalWeatherNextDay === "Clouds") {
            LocalWeatherNextDayDiv.addClass("fas fa-cloud fa-2x")
        } else if (LocalWeatherNextDay === "Rain") {
            LocalWeatherNextDayDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (LocalWeatherNextDay === "Clear") {
            LocalWeatherNextDayDiv.addClass("far fa-sun fa-2x")
        } else if (LocalWeatherNextDay === "Snow") {
            LocalWeatherNextDayDiv.addClass("fas fa-snowflake fa-2x")
        }else if (LocalWeatherNextDay === "Mist") {
            LocalWeatherNextDayDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (LocalWeatherNextDay === "Smog") {
            LocalWeatherNextDayDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var localFNextDay = localStorage.getItem("fNextDay")
        console.log(localFNextDay)
        var LocalNextDayTempCDiv = $("<div>")
        LocalNextDayTempCDiv.text("Temp:  " + localFNextDay + "  °F").addClass("tempClass")

        // Humidity
        var LocalNextDayHumidity = localStorage.getItem("nextDayHumidity")
        var LocalNextDayHumidityDiv = $("<div>")
        LocalNextDayHumidityDiv.text("Humidity:  " + LocalNextDayHumidity + "%").addClass("humidity")
        localNextDayDiv.append(LocalNextDayDateDiv, LocalWeatherNextDayDiv, LocalNextDayTempCDiv, LocalNextDayHumidityDiv)
        $("#nextDay").append(localNextDayDiv)
    }

    //For day two 
    var localDayTwoDiv = $("<div>")
    if (localStorage.getItem("dayTwoDate") !== null && localStorage.getItem("dayTwoWeather") !== null && localStorage.getItem("dayTwoFixedTemp") !== null && localStorage.getItem("dayTwoHumidity") !== null) {

        // GET Date 
        var localDayTwoDate = localStorage.getItem("dayTwoDate")
        var LocalDayTwoDateDiv = $("<div>").addClass("head")
        LocalDayTwoDateDiv.text(localDayTwoDate)

        //Get weather 
        var LocalWeatherDayTwo = localStorage.getItem("dayTwoWeather")
        var LocalWeatherDayTwoDiv = $("<div>")

        // If statement for weather
        if (LocalWeatherDayTwo === "Clouds") {
            LocalWeatherDayTwoDiv.addClass("fas fa-cloud fa-2x")
        } else if (LocalWeatherDayTwo === "Rain") {
            LocalWeatherDayTwoDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (LocalWeatherDayTwo === "Clear") {
            LocalWeatherDayTwoDiv.addClass("far fa-sun fa-2x")
        } else if (LocalWeatherDayTwo === "Snow") {
            LocalWeatherDayTwoDiv.addClass("fas fa-snowflake fa-2x")
        }else if (LocalWeatherDayTwo === "Mist") {
            LocalWeatherDayTwoDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (LocalWeatherDayTwo === "Haze") {
            LocalWeatherDayTwoDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var localFDayTwo = localStorage.getItem("dayTwoFixedTemp")
        var LocalDayTwoTempDiv = $("<div>")
        LocalDayTwoTempDiv.text("Temp:  " + localFDayTwo + "  °F").addClass("tempClass")

        // Humidity
        var LocalDayTwoHumidity = localStorage.getItem("dayTwoHumidity")
        var LocalDayTwoHumidityDiv = $("<div>")
        LocalDayTwoHumidityDiv.text("Humidity:  " + LocalDayTwoHumidity + "%").addClass("humidity")

        // Appending to page 
        localDayTwoDiv.append(LocalDayTwoDateDiv, LocalWeatherDayTwoDiv, LocalDayTwoTempDiv, LocalDayTwoHumidityDiv)
        $("#dayTwo").append(localDayTwoDiv)
    }

    //For day three
    var localDayThreeDiv = $("<div>")
    if (localStorage.getItem("dayThreeDate") !== null && localStorage.getItem("dayThreeWeather") !== null && localStorage.getItem("dayThreeTempFixed") !== null && localStorage.getItem("dayThreeHumidity") !== null) {

        // GET Date 
        var localDayThreeDate = localStorage.getItem("dayThreeDate")
        var LocalDayThreeDateDiv = $("<div>").addClass("head")
        LocalDayThreeDateDiv.text(localDayThreeDate)

        //Get weather 
        var LocalWeatherDayThree = localStorage.getItem("dayThreeWeather")
        var LocalWeatherDayThreeDiv = $("<div>")

        // If statement for weather
        if (LocalWeatherDayThree === "Clouds") {
            LocalWeatherDayThreeDiv.addClass("fas fa-cloud fa-2x")
        } else if (LocalWeatherDayThree === "Rain") {
            LocalWeatherDayThreeDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (LocalWeatherDayThree === "Clear") {
            LocalWeatherDayThreeDiv.addClass("far fa-sun fa-2x")
        } else if (LocalWeatherDayThree === "Snow") {
            LocalWeatherDayThreeDiv.addClass("fas fa-snowflake fa-2x")
        }else if (LocalWeatherDayThree === "Mist") {
            LocalWeatherDayThreeDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (LocalWeatherDayThree === "Haze") {
            LocalWeatherDayThreeDiv.addClass("fas fa-smog fa-2x")
        }


        // Temperature 
        var localFDayThree = localStorage.getItem("dayThreeTempFixed")
        var LocalDayThreeTempDiv = $("<div>")
        LocalDayThreeTempDiv.text("Temp:  " + localFDayThree + "  °F").addClass("tempClass")

        // Humidity
        var LocalDayThreeHumidity = localStorage.getItem("dayThreeHumidity")
        var LocalDayThreeHumidityDiv = $("<div>")
        LocalDayThreeHumidityDiv.text("Humidity:  " + LocalDayThreeHumidity + "%").addClass("humidity")

        // Appending to page 
        localDayThreeDiv.append(LocalDayThreeDateDiv, LocalWeatherDayThreeDiv, LocalDayThreeTempDiv, LocalDayThreeHumidityDiv)
        $("#dayThree").append(localDayThreeDiv)
    }


    //For day four
    var localDayFourDiv = $("<div>")
    if (localStorage.getItem("dayFourDate") !== null && localStorage.getItem("dayFourWeather") !== null && localStorage.getItem("dayFourFixedTemp") !== null && localStorage.getItem("dayFourHumidity") !== null) {

        // GET Date 
        var localDayFourDate = localStorage.getItem("dayFourDate")
        var LocalDayFourDateDiv = $("<div>").addClass("head")
        LocalDayFourDateDiv.text(localDayFourDate)

        //Get weather 
        var LocalWeatherDayFour = localStorage.getItem("dayFourWeather")
        var LocalWeatherDayFourDiv = $("<div>")

        // If statement for weather
        if (LocalWeatherDayFour === "Clouds") {
            LocalWeatherDayFourDiv.addClass("fas fa-cloud fa-2x")
        } else if (LocalWeatherDayFour === "Rain") {
            LocalWeatherDayFourDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (LocalWeatherDayFour === "Clear") {
            LocalWeatherDayFourDiv.addClass("far fa-sun fa-2x")
        } else if (LocalWeatherDayFour === "Snow") {
            LocalWeatherDayFourDiv.addClass("fas fa-snowflake fa-2x")
        }else if (LocalWeatherDayFour === "Mist") {
            LocalWeatherDayFourDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (LocalWeatherDayFour === "Haze") {
            LocalWeatherDayFourDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var localFDayFour = localStorage.getItem("dayFourFixedTemp")
        var LocalDayFourTempDiv = $("<div>")
        LocalDayFourTempDiv.text("Temp:  " + localFDayFour + "  °F").addClass("tempClass")

        // Humidity 
        var LocalDayFourHumidity = localStorage.getItem("dayFourHumidity")
        var LocalDayFourHumidityDiv = $("<div>")
        LocalDayFourHumidityDiv.text("Humidity:  " + LocalDayFourHumidity + "%").addClass("humidity")

        // Appending to page 
        localDayFourDiv.append(LocalDayFourDateDiv, LocalWeatherDayFourDiv, LocalDayFourTempDiv, LocalDayFourHumidityDiv)
        $("#dayFour").append(localDayFourDiv)
    }

    //For day five
    var localDayFiveDiv = $("<div>")
    if (localStorage.getItem("dayFiveDate") !== null && localStorage.getItem("dayFiveWeather") !== null && localStorage.getItem("dayFiveFixedTemp") !== null && localStorage.getItem("dayFiveHumidity") !== null) {

        // GET Date 
        var localDayFiveDate = localStorage.getItem("dayFiveDate")
        var LocalDayFiveDateDiv = $("<div>").addClass("head")
        LocalDayFiveDateDiv.text(localDayFiveDate)

        //Get weather 
        var LocalWeatherDayFive = localStorage.getItem("dayFiveWeather")
        var LocalWeatherDayFiveDiv = $("<div>")

        // If statement for weather
        if (LocalWeatherDayFive === "Clouds") {
            LocalWeatherDayFiveDiv.addClass("fas fa-cloud fa-2x")
        } else if (LocalWeatherDayFive === "Rain") {
            LocalWeatherDayFiveDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (LocalWeatherDayFive === "Clear") {
            LocalWeatherDayFiveDiv.addClass("far fa-sun fa-2x")
        } else if (LocalWeatherDayFive === "Snow") {
            LocalWeatherDayFiveDiv.addClass("fas fa-snowflake fa-2x")
        }else if (LocalWeatherDayFive === "Mist") {
            LocalWeatherDayFiveDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (LocalWeatherDayFive === "Haze") {
            LocalWeatherDayFiveDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var localFDayFive = localStorage.getItem("dayFiveFixedTemp")
        var LocalDayFiveTempDiv = $("<div>")
        LocalDayFiveTempDiv.text("Temp:  " + localFDayFive + "  °F").addClass("tempClass")

        // Humidity 
        var LocalDayFiveHumidity = localStorage.getItem("dayFiveHumidity")
        var LocalDayFiveHumidityDiv = $("<div>")
        LocalDayFiveHumidityDiv.text("Humidity:  " + LocalDayFiveHumidity + "%").addClass("humidity")

        // Appending to page 
        localDayFiveDiv.append(LocalDayFiveDateDiv, LocalWeatherDayFiveDiv, LocalDayFiveTempDiv, LocalDayFiveHumidityDiv)
        $("#dayFive").append(localDayFiveDiv)
    }
}














$("#add-city").on("click", function () {
    event.preventDefault()
    $("#dayForcast").empty()

    //setting location 
    var location = $("#city-input").val().trim();
    var firstLetter = location.charAt(0).toUpperCase()
    var restWord = location.slice(1)
    let locationC = (firstLetter + restWord)
    console.log("TCL: location", locationC)
    
    pastSearches.push(locationC)
    console.log(pastSearches)
    localStorage.setItem("pastSearches", pastSearches)
    $(".list").empty()

    // for loop for appending list items
    for (i = 0; i < pastSearches.length; i++) {
        let searchItem = $("<li>")
        searchItem.text(pastSearches[i])
        $(".list").prepend(searchItem)

    }

    var APIKey = "20c488e0a9aff750eabd58301c43b3ce"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var lat = response.coord.lat
        var lon = response.coord.lon
    console.log("TCL: response", response)
        // add lat and long variables 


    var APIKey = "20c488e0a9aff750eabd58301c43b3ce"
    var queryURL = `http://api.openweathermap.org/data/2.5/uvi?appid=${APIKey}&lat=${lat}&lon=${lon}`
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (uVResponse) {
        console.log(queryURL)
        console.log(uVResponse)



   

        //initial div and city div 
        var weatherDiv = $("<div>")
        var cityDiv = $("<div>").addClass("bigger")
        var city = (response.name)
        localStorage.setItem("InitialCity", city)
        var weather = (response.weather[0].main)
        var weatherAnimation = $("<span>")
        localStorage.setItem("initialWeather", weather)

        // applying class to weather animation span 

        if (weather === "Clouds") {
            weatherAnimation.addClass("fas fa-cloud fa-2x")
        } else if (weather === "Rain") {
            weatherAnimation.addClass("fas fa-cloud-rain fa-2x")
        } else if (weather === "Clear") {
            weatherAnimation.addClass("far fa-sun fa-2x")
        } else if (weather === "Snow") {
            weatherAnimation.addClass("fas fa-snowflake fa-2x")
        }else if (weather === "Mist") {
            weatherAnimation.addClass("fas fa-cloud-rain fa-2x")
        }else if (weather === "Haze") {
            weatherAnimation.addClass("fas fa-smog fa-2x")
        }
        cityDiv.text(city + " " + date + " " )
        cityDiv.append(weatherAnimation)

        //temperature
        var k = (response.main.temp)
        var f = (k - 273.5) * 1.80 + 32
        var tempDiv = $("<div>")
        tempDiv.text("Temperature : " + f.toFixed(2) + "F").addClass("tempClass")
        localStorage.setItem("initialTempFixed", f.toFixed(2))

        // Humidity
        var humidity = (response.main.humidity)
        console.log(humidity)
        var humidityDiv = $("<div>")
        humidityDiv.text("Humidity :  " + humidity + " %").addClass("humidity")
        localStorage.setItem("initialHumidity", humidity)

        // Wind Speed
        var windSpeed = (response.wind.speed)
        var windSpeedDiv = $("<div>")
        windSpeedDiv.text("Wind Speed : " + windSpeed + " MPH").addClass("windSpeed")
        localStorage.setItem("initialWindSpeed", windSpeed)

        //UV Index 
        var uvIndexDiv = $("<div>")
        var uvIndex = uVResponse.value
        uvIndexDiv.text("UV Index:  ").addClass("UvIndex")
        var uvIndexSpan = $("<span>")
        uvIndexSpan.text(uvIndex)
        uvIndexDiv.append(uvIndexSpan)
        localStorage.setItem("initalUvIndex", uvIndex)
        console.log(uvIndex)
        if (uvIndex <= 3){
            uvIndexSpan.addClass("low")
        }else if(uvIndex > 7.01){
            uvIndexSpan.addClass("high")
        }else if(3.1 <= uvIndex <= 6.9){
            uvIndexSpan.addClass("medium")
        }

        //Appending to page
        $(weatherDiv).append(cityDiv, tempDiv, humidityDiv, windSpeedDiv, uvIndexDiv)
        $("#dayForcast").append(weatherDiv)
    })
})

    // 5 day api 
    var APIKey = "20c488e0a9aff750eabd58301c43b3ce"
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" + APIKey
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        // Emptying divs when new city is called  
        $("#nextDay").empty()
        $("#dayTwo").empty()
        $("#dayThree").empty()
        $("#dayFour").empty()
        $("#dayFive").empty()


        //Next Day 
        var nextDayDiv = $("<div>")

        //Date 
        var nextDayDate = moment().add(1, 'days').format("L")
        localStorage.setItem("nextDayDate", nextDayDate)
        var nextDayDateDiv = $("<div>").addClass("head")
        nextDayDateDiv.text(nextDayDate)

        //Get weather 
        var weatherNextDay = (response.list[4].weather[0].main)
        localStorage.setItem("weatherNextDay", weatherNextDay)
        var weatherNextDayDiv = $("<div>")

        // If statement for weather
        if (weatherNextDay === "Clouds") {
            weatherNextDayDiv.addClass("fas fa-cloud fa-2x")
        } else if (weatherNextDay === "Rain") {
            weatherNextDayDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (weatherNextDay === "Clear") {
            weatherNextDayDiv.addClass("far fa-sun fa-2x")
        } else if (weatherNextDay === "Snow") {
            weatherNextDayDiv.addClass("fas fa-snowflake fa-2x")
        }else if (weatherNextDay === "Mist") {
            weatherNextDayDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (weatherNextDay === "Haze") {
            weatherNextDayDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var nextDayTempC = (response.list[4].main.temp)
        var fNextDay = (nextDayTempC - 273.5) * 1.80 + 32
        console.log(nextDayTempC)
        console.log(fNextDay.toFixed(2))
        localStorage.setItem("fNextDay", fNextDay.toFixed(2))
        var nextDayTempCDiv = $("<div>")
        nextDayTempCDiv.text("Temp:  " + fNextDay.toFixed(2) + "  °F").addClass("tempClass")

        // Humidity
        var nextDayHumidity = (response.list[4].main.humidity)
        console.log(nextDayHumidity)
        localStorage.setItem("nextDayHumidity", nextDayHumidity)
        var nextDayHumidityDiv = $("<div>")
        nextDayHumidityDiv.text("Humidity:  " + nextDayHumidity + "%").addClass("humidity")

        //Appending to page 
        nextDayDiv.append(nextDayDateDiv, weatherNextDayDiv, nextDayTempCDiv, nextDayHumidityDiv)
        $("#nextDay").append(nextDayDiv)

        // Day 2
        // var dayTwoArray = []
        var dayTwoDiv = $("<div>")

        //Date 
        var dayTwoDate = moment().add(2, 'days').format("L")
        var dayTwoDateDiv = $("<div>").addClass("head")
        localStorage.setItem("dayTwoDate", dayTwoDate)
        // dayTwoArray.push(dayTwoDate)
        dayTwoDateDiv.text(dayTwoDate)

        //Get weather 
        var dayTwoWeather = (response.list[12].weather[0].main)
        var dayTwoWeatherDiv = $("<div>")
        // dayTwoArray.push(dayTwoWeather)
        localStorage.setItem("dayTwoWeather", dayTwoWeather)

        //If statement for weather
        if (dayTwoWeather === "Clouds") {
            dayTwoWeatherDiv.addClass("fas fa-cloud fa-2x")
        } else if (dayTwoWeather === "Rain") {
            dayTwoWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (dayTwoWeather === "Clear") {
            dayTwoWeatherDiv.addClass("far fa-sun fa-2x")
        } else if (dayTwoWeather === "Snow") {
            dayTwoWeatherDiv.addClass("fas fa-snowflake fa-2x")
        }else if (dayTwoWeather === "Mist") {
            dayTwoWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (dayTwoWeather === "Haze") {
            dayTwoWeatherDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var dayTwoTempC = (response.list[12].main.temp)
        var fTwo = (dayTwoTempC - 273.5) * 1.80 + 32
        var dayTwoTempCDiv = $("<div>")
        var dayTwoFixedTemp = fTwo.toFixed(2)
        localStorage.setItem("dayTwoFixedTemp", dayTwoFixedTemp)
        dayTwoTempCDiv.text("Temp:  " + dayTwoFixedTemp + "  °F").addClass("tempClass")
        // dayTwoArray.push(fTwo)

        // Humidity
        var dayTwoHumidity = (response.list[12].main.humidity)
        console.log(dayTwoHumidity)
        var dayTwoHumidityDiv = $("<div>")
        dayTwoHumidityDiv.text("Humidity:  " + dayTwoHumidity + "%").addClass("humidity")
        localStorage.setItem("dayTwoHumidity", dayTwoHumidity)








        // dayTwoArray.push(dayTwoHumidity)
        // console.log("TCL: dayTwoArray", dayTwoArray)

        //setting day two array to local storage
        // localStorage.setItem("dayTwoArray", dayTwoArray)

        //Appending to page
        dayTwoDiv.append(dayTwoDateDiv, dayTwoWeatherDiv, dayTwoTempCDiv, dayTwoHumidityDiv)
        $("#dayTwo").append(dayTwoDiv)

        // Day 3 
        var dayThreeDiv = $("<div>")

        //Date 
        var dayThreeDate = moment().add(3, 'days').format("L")
        var dayThreeDateDiv = $("<div>").addClass("head")
        dayThreeDateDiv.text(dayThreeDate)
        localStorage.setItem("dayThreeDate", dayThreeDate)

        //Get weather 
        var dayThreeWeather = (response.list[20].weather[0].main)
        var dayThreeWeatherDiv = $("<div>")
        localStorage.setItem("dayThreeWeather", dayThreeWeather)

        //If statement for weather
        if (dayThreeWeather === "Clouds") {
            dayThreeWeatherDiv.addClass("fas fa-cloud fa-2x")
        } else if (dayThreeWeather === "Rain") {
            dayThreeWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (dayThreeWeather === "Clear") {
            dayThreeWeatherDiv.addClass("far fa-sun fa-2x")
        } else if (dayThreeWeather === "Snow") {
            dayThreeWeatherDiv.addClass("fas fa-snowflake fa-2x")
        }else if (dayThreeWeather === "Mist") {
            dayThreeWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (dayThreeWeather === "Haze") {
            dayThreeWeatherDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var dayThreeTempC = (response.list[20].main.temp)
        var fThree = (dayThreeTempC - 273.5) * 1.80 + 32
        console.log(dayThreeTempC)
        console.log(fThree.toFixed(2))
        var dayThreeTempCDiv = $("<div>")
        dayThreeTempCDiv.text("Temp:  " + fThree.toFixed(2) + "  °F").addClass("tempClass")
        localStorage.setItem("dayThreeTempFixed", fThree.toFixed(2))

        // Humidity
        var dayThreeHumidity = (response.list[20].main.humidity)
        var dayThreeHumidityDiv = $("<div>")
        dayThreeHumidityDiv.text("Humidity:  " + dayThreeHumidity + "%").addClass("humidity")
        localStorage.setItem("dayThreeHumidity", dayThreeHumidity)

        //Appending to page 
        dayThreeDiv.append(dayThreeDateDiv, dayThreeWeatherDiv, dayThreeTempCDiv, dayThreeHumidityDiv)
        $("#dayThree").append(dayThreeDiv)

        // Day 4 
        var dayFourDiv = $("<div>")

        //date 
        var dayFourDate = moment().add(4, 'days').format("L")
        var dayFourDateDiv = $("<div>").addClass("head")
        dayFourDateDiv.text(dayFourDate)
        localStorage.setItem("dayFourDate", dayFourDate)


        //Get weather 
        var dayFourWeather = (response.list[28].weather[0].main)
        var dayFourWeatherDiv = $("<div>")
        localStorage.setItem("dayFourWeather", dayFourWeather)

        // If statement for weather
        if (dayFourWeather === "Clouds") {
            dayFourWeatherDiv.addClass("fas fa-cloud fa-2x fa-2x")
        } else if (dayFourWeather === "Rain") {
            dayFourWeatherDiv.addClass("fas fa-cloud-rain fa-2x fa-2x")
        } else if (dayFourWeather === "Clear") {
            dayFourWeatherDiv.addClass("far fa-sun fa-2x fa-2x")
        } else if (dayFourWeather === "Snow") {
            dayFourWeatherDiv.addClass("fas fa-snowflake fa-2x fa-2x")
        }else if (dayFourWeather === "Mist") {
            dayFourWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (dayFourWeather === "Haze") {
            dayFourWeatherDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var dayFourTempC = (response.list[28].main.temp)
        var fFour = (dayFourTempC - 273.5) * 1.80 + 32
        var dayFourTempCDiv = $("<div>")
        dayFourTempCDiv.text("Temp:  " + fFour.toFixed(2) + "  °F").addClass("tempClass")
        localStorage.setItem("dayFourFixedTemp", fFour.toFixed(2))


        // Humidity
        var dayFourHumidity = (response.list[28].main.humidity)
        var dayFourHumidityDiv = $("<div>")
        dayFourHumidityDiv.text("Humidity:  " + dayFourHumidity + "%").addClass("humidity")
        localStorage.setItem("dayFourHumidity", dayFourHumidity)

        // Appending to page 
        dayFourDiv.append(dayFourDateDiv, dayFourWeatherDiv, dayFourTempCDiv, dayFourHumidityDiv)
        $("#dayFour").append(dayFourDiv)


        // Day 5 
        var dayFiveDiv = $("<div>")

        //date 
        var dayFiveDate = moment().add(5, 'days').format("L")
        console.log(dayFiveDate)
        var dayFiveDateDiv = $("<div>").addClass("head")
        dayFiveDateDiv.text(dayFiveDate)
        localStorage.setItem("dayFiveDate", dayFiveDate)


        //Get weather 
        var dayFiveWeather = (response.list[36].weather[0].main)
        var dayFiveWeatherDiv = $("<div>")
        localStorage.setItem("dayFiveWeather", dayFiveWeather)

        //If Statement for Weather
        if (dayFiveWeather === "Clouds") {
            dayFiveWeatherDiv.addClass("fas fa-cloud fa-2x")
        } else if (dayFiveWeather === "Rain") {
            dayFiveWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (dayFiveWeather === "Clear") {
            dayFiveWeatherDiv.addClass("far fa-sun fa-2x")
        } else if (dayFiveWeather === "Snow") {
            dayFiveWeatherDiv.addClass("fas fa-snowflake fa-2x")
        }else if (dayFiveWeather === "Mist") {
            dayFiveWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        }else if (dayFiveWeather === "Haze") {
            dayFiveWeatherDiv.addClass("fas fa-smog fa-2x")
        }

        // Temperature 
        var dayFiveTempC = (response.list[36].main.temp)
        var fFive = (dayFiveTempC - 273.5) * 1.80 + 32
        console.log(dayFiveTempC)
        console.log(fFive.toFixed(2))
        var dayFiveTempCDiv = $("<div>")
        dayFiveTempCDiv.text("Temp:  " + fFive.toFixed(2) + "  °F").addClass("tempClass")
        localStorage.setItem("dayFiveFixedTemp", fFive.toFixed(2))

        // Humidity
        var dayFiveHumidity = (response.list[36].main.humidity)
        console.log(dayFiveHumidity)
        var dayFiveHumidityDiv = $("<div>")
        dayFiveHumidityDiv.text("Humidity:  " + dayFiveHumidity + "%").addClass("humidity")
        localStorage.setItem("dayFiveHumidity", dayFiveHumidity)

        //Appending to page 
        dayFiveDiv.append(dayFiveDateDiv, dayFiveWeatherDiv, dayFiveTempCDiv, dayFiveHumidityDiv)
        $("#dayFive").append(dayFiveDiv)
    })
})

// // list on click
// $("li").on("click", function () {
//     event.preventDefault()
//     console.log("clicked")

//     var listLocation = $(this)
//     console.log(this)
// })

