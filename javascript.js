//Declared Variables 
var pastSearches = []
var lat
var lon

//Setting Date
var date = (moment().format("L"))

//trying to retrieve local storage 
retrieveStorage()
function retrieveStorage() {
    if(localStorage.getItem("pastSearches") !== null){
    prevSearches = localStorage.getItem("pastSearches").split(",")
    console.log("TCL: retrieveStorage -> prevSearches", prevSearches)
    pastSearches.push(prevSearches)
    console.log(pastSearches)

    //    prevSearchesArray.push(prevSearches)
    //    console.log("TCL: retrieveStorage -> prevSearchesArray", prevSearchesArray)
    for (i = 0; i < prevSearches.length && i < 10; i++) {
        let searchItem = $("<li>")
        searchItem.text(prevSearches[i])
        $(".list").prepend(searchItem)
    }
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
    for (i = 0; i < pastSearches.length && i < 10; i++) {
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

        //initial div and city div 
        var weatherDiv = $("<div>")
        var cityDiv = $("<div>").addClass("bigger")
        var City = (response.name)
        var weather = (response.weather[0].main)
        var weatherAnimation = $("<span>")

        // applying class to weather animation span 

        if (weather === "Clouds") {
            weatherAnimation.addClass("fas fa-cloud fa-2x")
        } else if (weather === "Rain") {
            weatherAnimation.addClass("fas fa-cloud-rain fa-2x")
        } else if (weather === "Clear") {
            weatherAnimation.addClass("far fa-sun fa-2x")
        } else if (weather === "Snow") {
            weatherAnimation.addClass("fas fa-snowflake fa-2x")
        }
        cityDiv.text(City + " " + date + " " + weatherAnimation)

        //temperature
        var k = (response.main.temp)
        var f = (k - 273.5) * 1.80 + 32
        var tempDIv = $("<div>")
        tempDIv.text("Temperature : " + f.toFixed(2) + "F").addClass("tempClass")

        // Humidty
        var humidity = (response.main.humidity)
        console.log(humidity)
        var humidityDiv = $("<div>")
        humidityDiv.text("Humidity :  " + humidity + " %").addClass("humidity")

        // Windspeed
        var windSpeed = (response.wind.speed)
        var windSpeedDiv = $("<div>")
        windSpeedDiv.text("Wind Speed : " + windSpeed + " MPH").addClass("windSpeed")

        //UV Index 
        var UvIndexDiv = $("<div>")
        var UvIndex
        UvIndexDiv.text("UV Index:  ").addClass("UvIndex")

        //Appending to page
        $(weatherDiv).append(cityDiv, tempDIv, humidityDiv, windSpeedDiv, UvIndexDiv)
        $("#dayForcast").append(weatherDiv)
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
        var nextDayDateDiv = $("<div>").addClass("head")
        nextDayDateDiv.text(nextDayDate)

        //Get weather 
        var weatherNextDay = (response.list[4].weather[0].main)
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
        }

        // Temperature 
        var nextDayTempC = (response.list[4].main.temp)
        var fNextDay = (nextDayTempC - 273.5) * 1.80 + 32
        console.log(nextDayTempC)
        console.log(fNextDay.toFixed(2))
        var nextDayTempCDiv = $("<div>")
        nextDayTempCDiv.text("Temp:  " + fNextDay.toFixed(2) + "  °F").addClass("tempClass")

        // Humidity
        var nextDayHumidity = (response.list[4].main.humidity)
        console.log(nextDayHumidity)
        var nextDayHumidityDiv = $("<div>")
        nextDayHumidityDiv.text("Humidity:  " + nextDayHumidity + "%").addClass("humidity")

        //Appending to page 
        nextDayDiv.append(nextDayDateDiv, weatherNextDayDiv, nextDayTempCDiv, nextDayHumidityDiv)
        $("#nextDay").append(nextDayDiv)

        // Day 2
        var dayTwoDiv = $("<div>")

        //Date 
        var dayTwoDate = moment().add(2, 'days').format("L")
        var dayTwoDateDiv = $("<div>").addClass("head")
        dayTwoDateDiv.text(dayTwoDate)

        //Get weather 
        var dayTwoWeather = (response.list[12].weather[0].main)
        var dayTwoWeatherDiv = $("<div>")

        //If statement for weather
        if (dayTwoWeather === "Clouds") {
            dayTwoWeatherDiv.addClass("fas fa-cloud fa-2x")
        } else if (dayTwoWeather === "Rain") {
            dayTwoWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (dayTwoWeather === "Clear") {
            dayTwoWeatherDiv.addClass("far fa-sun fa-2x")
        } else if (dayTwoWeather === "Snow") {
            dayTwoWeatherDiv.addClass("fas fa-snowflake fa-2x")
        }

        // Temperature 
        var dayTwoTempC = (response.list[12].main.temp)
        var ftwo = (dayTwoTempC - 273.5) * 1.80 + 32
        var dayTwoTempCDiv = $("<div>")
        dayTwoTempCDiv.text("Temp:  " + ftwo.toFixed(2) + "  °F").addClass("tempClass")

        // Humidity
        var DayTwoHumidity = (response.list[12].main.humidity)
        console.log(DayTwoHumidity)
        var DayTwoHumidityDiv = $("<div>")
        DayTwoHumidityDiv.text("Humidity:  " + DayTwoHumidity + "%").addClass("humidity")

        //Appending to page
        dayTwoDiv.append(dayTwoDateDiv, dayTwoWeatherDiv, dayTwoTempCDiv, DayTwoHumidityDiv)
        $("#dayTwo").append(dayTwoDiv)

        // Day 3 
        var dayThreeDiv = $("<div>")

        //Date 
        var dayThreeDate = moment().add(3, 'days').format("L")
        var dayThreeDateDiv = $("<div>").addClass("head")
        dayThreeDateDiv.text(dayThreeDate)

        //Get weather 
        var dayThreeWeather = (response.list[20].weather[0].main)
        var dayThreeWeatherDiv = $("<div>")

        //If statement for weather
        if (dayThreeWeather === "Clouds") {
            dayThreeWeatherDiv.addClass("fas fa-cloud fa-2x")
        } else if (dayThreeWeather === "Rain") {
            dayThreeWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (dayThreeWeather === "Clear") {
            dayThreeWeatherDiv.addClass("far fa-sun fa-2x")
        } else if (dayThreeWeather === "Snow") {
            dayThreeWeatherDiv.addClass("fas fa-snowflake fa-2x")
        }

        // Temperature 
        var dayThreeTempC = (response.list[20].main.temp)
        var fthree = (dayThreeTempC - 273.5) * 1.80 + 32
        console.log(dayThreeTempC)
        console.log(fthree.toFixed(2))
        var dayThreeTempCDiv = $("<div>")
        dayThreeTempCDiv.text("Temp:  " + fthree.toFixed(2) + "  °F").addClass("tempClass")

       // Humidity
        var dayThreeHumidity = (response.list[20].main.humidity)
        var dayThreeHumidityDiv = $("<div>")
        dayThreeHumidityDiv.text("Humidity:  " + dayThreeHumidity + "%").addClass("humidity")

        //Appending to page 
        dayThreeDiv.append(dayThreeDateDiv, dayThreeWeatherDiv, dayThreeTempCDiv, dayThreeHumidityDiv)
        $("#dayThree").append(dayThreeDiv)

        // Day 4 
        var dayFourDiv = $("<div>")

        //date 
        var dayFourDate = moment().add(4, 'days').format("L")
        var dayFourDateDiv = $("<div>").addClass("head")
        dayFourDateDiv.text(dayFourDate)


        //Get weather 
        var dayFourWeather = (response.list[28].weather[0].main)
        var dayFourWeatherDiv = $("<div>")

        // If statement for weather
        if (dayFourWeather === "Clouds") {
            dayFourWeatherDiv.addClass("fas fa-cloud fa-2x fa-2x")
        } else if (dayFourWeather === "Rain") {
            dayFourWeatherDiv.addClass("fas fa-cloud-rain fa-2x fa-2x")
        } else if (dayFourWeather === "Clear") {
            dayFourWeatherDiv.addClass("far fa-sun fa-2x fa-2x")
        } else if (dayFourWeather === "Snow") {
            dayFourWeatherDiv.addClass("fas fa-snowflake fa-2x fa-2x")
        }

        // Temperature 
        var dayFourTempC = (response.list[28].main.temp)
        var fFive = (dayFourTempC - 273.5) * 1.80 + 32
        var dayFourTempCDiv = $("<div>")
        dayFourTempCDiv.text("Temp:  " + fFive.toFixed(2) + "  °F").addClass("tempClass")

        // Humidity
        var dayFourHumidity = (response.list[28].main.humidity)
        var dayFourHumidityDiv = $("<div>")
        dayFourHumidityDiv.text("Humidity:  " + dayFourHumidity + "%").addClass("humidity")

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


        //Get weather 
        var dayFiveWeather = (response.list[36].weather[0].main)
        var dayFiveWeatherDiv = $("<div>")

        //If Statement for Weather
        if (dayFiveWeather === "Clouds") {
            dayFiveWeatherDiv.addClass("fas fa-cloud fa-2x")
        } else if (dayFiveWeather === "Rain") {
            dayFiveWeatherDiv.addClass("fas fa-cloud-rain fa-2x")
        } else if (dayFiveWeather === "Clear") {
            dayFiveWeatherDiv.addClass("far fa-sun fa-2x")
        } else if (dayFiveWeather === "Snow") {
            dayFiveWeatherDiv.addClass("fas fa-snowflake fa-2x")
        }

        // Temperature 
        var dayFiveTempC = (response.list[36].main.temp)
        var fFour = (dayFiveTempC - 273.5) * 1.80 + 32
        console.log(dayFiveTempC)
        console.log(fFour.toFixed(2))
        var dayFiveTempCDiv = $("<div>")
        dayFiveTempCDiv.text("Temp:  " + fFour.toFixed(2) + "  °F").addClass("tempClass")

        // Humidity
        var dayFiveHumidity = (response.list[36].main.humidity)
        console.log(dayFiveHumidity)
        var dayFiveHumidityDiv = $("<div>")
        dayFiveHumidityDiv.text("Humidity:  " + dayFiveHumidity + "%").addClass("humidity")

        //Appending to page 
        dayFiveDiv.append(dayFiveDateDiv, dayFiveWeatherDiv, dayFiveTempCDiv, dayFiveHumidityDiv)
        $("#dayFive").append(dayFiveDiv)
    })
})


// trying to add UV 

// $("#addACity").on("click", function () {
//     event.preventDefault()
//     console.log("works")
//     var location = $("#multiDayInput").val();
//     console.log(location)

//     var APIKey = "20c488e0a9aff750eabd58301c43b3ce"
//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" + APIKey
//     console.log(queryURL)
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//         console.log(queryURL)
//         console.log(response)



//     })



