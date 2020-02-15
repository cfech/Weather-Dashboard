
var lat
var lon

var tomorrow = moment().add(1, 'days').format("L"); 
console.log(tomorrow)

var date = (moment().format("L"))
console.log(date)



$("#add-city").on("click", function () {
    event.preventDefault()
    $("#dayForcast").empty()

    console.log("works")
    var location = $("#city-input").val().trim();
    console.log(location)

    var APIKey = "20c488e0a9aff750eabd58301c43b3ce"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response)

        //initial div and city div 
        var weatherDiv = $("<div>")
        var cityDiv = $("<div>").addClass("bigger")
        var City = (response.name)
        var weather = (response.weather[0].main)
        console.log(City)
        cityDiv.text(City + " " + date + "  " + weather)
        //temperature
        var k = (response.main.temp)
        var f = (k - 273.5) * 1.80 + 32
        console.log(k)
        console.log(f.toFixed(2))
        var tempDIv = $("<div>")
        tempDIv.text("Temperature : " + f.toFixed(2) + "F")

        // humidty
        var humidity = (response.main.humidity)
        console.log(humidity)
        var humidityDiv = $("<div>")
        humidityDiv.text("Humidity :  " + humidity + " %")
        // windspeed
        var windSpeed = (response.wind.speed)
        console.log(windSpeed)
        var windSpeedDiv = $("<div>")
        windSpeedDiv.text("Wind Speed : " + windSpeed + " MPH")
        $(weatherDiv).append(cityDiv, tempDIv, humidityDiv, windSpeedDiv)
        $("#dayForcast").append(weatherDiv)

    })
    //     lon = (response.coord.lon)
    //     console.log(lon)
    //     lat = (response.coord.lat)
    //     console.log(lat)

    // }).then
    //uv index
    // var APIKey = "20c488e0a9aff750eabd58301c43b3ce"

    // var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=20c488e0a9aff750eabd58301c43b3ce&lat={51.51}&lon={-0.13}"
    // console.log(queryURL)
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(queryURL)
    //     console.log(response)


    // 5 day api 

    var APIKey = "20c488e0a9aff750eabd58301c43b3ce"
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + location + "&appid=" + APIKey
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response.list)
        var nextDay = (response.list[4])
        var dayTwo = (response.list[12])
        var dayThree = (response.list[20])
        var dayFour = (response.list[28])
        var dayFive = (response.list[36])
        console.log(nextDay)
        console.log(dayTwo)
        console.log(dayThree)
        console.log(dayFour)
        console.log(dayFive)

        // next day 
        $("#nextDay").empty()
        $("#dayTwo").empty()
        $("#dayThree").empty()
        $("#dayFour").empty()
        $("#dayFive").empty()



        var nextDayDiv = $("<div>")
        //date 
        var nextDayDate = moment().add(1, 'days').format("L")
        console.log(nextDayDate)

        var nextDayDateDiv = $("<div>").addClass("head")
        nextDayDateDiv.text(nextDayDate)



        //get weather 
        var weatherNextDay = (response.list[4].weather[0].main)

        console.log(weatherNextDay)

        var weatherNextDayDiv = $("<div>")
        weatherNextDayDiv.text(weatherNextDay)




        // temperature 
        var nextDayTempC = (response.list[4].main.temp)
        var fNextDay = (nextDayTempC - 273.5) * 1.80 + 32
        console.log(nextDayTempC)
        console.log(fNextDay.toFixed(2))
        var nextDayTempCDiv = $("<div>")
        nextDayTempCDiv.text("Temp:  " + fNextDay.toFixed(2) + "  °F")





        // humidity
        var nextDayHumidity = (response.list[4].main.humidity)
        console.log(nextDayHumidity)
        var nextDayHumidityDiv = $("<div>")
        nextDayHumidityDiv.text("Humidity:  " + nextDayHumidity + "%")

        nextDayDiv.append(nextDayDateDiv, weatherNextDayDiv, nextDayTempCDiv, nextDayHumidityDiv)
        $("#nextDay").append(nextDayDiv)



        // day 2



        var dayTwoDiv = $("<div>")
        //date 
        var dayTwoDate = moment().add(2, 'days').format("L")
        console.log(dayTwoDate)
        var dayTwoDateDiv = $("<div>").addClass("head")
        dayTwoDateDiv.text(dayTwoDate)


        //get weather 
        var dayTwoWeather = (response.list[12].weather[0].main)

        console.log(dayTwoWeather)

        var dayTwoWeatherDiv = $("<div>")
        dayTwoWeatherDiv.text(dayTwoWeather)




        // temperature 
        var dayTwoTempC = (response.list[12].main.temp)
        var ftwo = (dayTwoTempC - 273.5) * 1.80 + 32
        console.log(dayTwoTempC)
        console.log(ftwo.toFixed(2))
        var dayTwoTempCDiv = $("<div>")
        dayTwoTempCDiv.text("Temp:  " + ftwo.toFixed(2) + "  °F")





        // humidity
        var DayTwoHumidity = (response.list[12].main.humidity)
        console.log(DayTwoHumidity)
        var DayTwoHumidityDiv = $("<div>")
        DayTwoHumidityDiv.text("Humidity:  " + DayTwoHumidity + "%")

        dayTwoDiv.append(dayTwoDateDiv, dayTwoWeatherDiv, dayTwoTempCDiv, DayTwoHumidityDiv)
        $("#dayTwo").append(dayTwoDiv)

        // Day 3 

        var dayThreeDiv = $("<div>")
        //date 
        var dayThreeDate = moment().add(3, 'days').format("L")
        console.log(dayThreeDate)
        var dayThreeDateDiv = $("<div>").addClass("head")
        dayThreeDateDiv.text(dayThreeDate)


        //get weather 
        var dayThreeWeather = (response.list[20].weather[0].main)

        console.log(dayThreeWeather)

        var dayThreeWeatherDiv = $("<div>")
        dayThreeWeatherDiv.text(dayThreeWeather)




        // temperature 
        var dayThreeTempC = (response.list[20].main.temp)
        var fthree = (dayThreeTempC - 273.5) * 1.80 + 32
        console.log(dayThreeTempC)
        console.log(fthree.toFixed(2))
        var dayThreeTempCDiv = $("<div>")
        dayThreeTempCDiv.text("Temp:  " + fthree.toFixed(2) + "  °F")





        // humidity
        var dayThreeHumidity = (response.list[20].main.humidity)
        console.log(dayThreeHumidity)
        var dayThreeHumidityDiv = $("<div>")
        dayThreeHumidityDiv.text("Humidity:  " + dayThreeHumidity + "%")

        dayThreeDiv.append(dayThreeDateDiv, dayThreeWeatherDiv, dayThreeTempCDiv, dayThreeHumidityDiv)
        $("#dayThree").append(dayThreeDiv)




        // Day 4 

        var dayFourDiv = $("<div>")
        //date 
        var dayFourDate = moment().add(4, 'days').format("L")
        console.log(dayFourDate)
        var dayFourDateDiv = $("<div>").addClass("head")
        dayFourDateDiv.text(dayFourDate)


        //get weather 
        var dayFourWeather = (response.list[28].weather[0].main)

        console.log(dayFourWeather)

        var dayFourWeatherDiv = $("<div>")
        dayFourWeatherDiv.text(dayFourWeather)




        // temperature 
        var dayFourTempC = (response.list[28].main.temp)
        var fFive = (dayFourTempC - 273.5) * 1.80 + 32
        console.log(dayFourTempC)
        console.log(fFive.toFixed(2))
        var dayFourTempCDiv = $("<div>")
        dayFourTempCDiv.text("Temp:  " + fFive.toFixed(2) + "  °F")





        // humidity
        var dayFourHumidity = (response.list[28].main.humidity)
        console.log(dayFourHumidity)
        var dayFourHumidityDiv = $("<div>")
        dayFourHumidityDiv.text("Humidity:  " + dayFourHumidity + "%")

        dayFourDiv.append(dayFourDateDiv, dayFourWeatherDiv, dayFourTempCDiv, dayFourHumidityDiv)
        $("#dayFour").append(dayFourDiv)


        // Day 5 

        var dayFiveDiv = $("<div>")
        //date 
        var dayFiveDate = moment().add(5, 'days').format("L")
        console.log(dayFiveDate)
        var dayFiveDateDiv = $("<div>").addClass("head")
        dayFiveDateDiv.text(dayFiveDate)


        //get weather 
        var dayFiveWeather = (response.list[36].weather[0].main)

        console.log(dayFiveWeather)

        var dayFiveWeatherDiv = $("<div>")
        dayFiveWeatherDiv.text(dayFiveWeather)




        // temperature 
        var dayFiveTempC = (response.list[36].main.temp)
        var fFour = (dayFiveTempC - 273.5) * 1.80 + 32
        console.log(dayFiveTempC)
        console.log(fFour.toFixed(2))
        var dayFiveTempCDiv = $("<div>")
        dayFiveTempCDiv.text("Temp:  " + fFour.toFixed(2) + "  °F")





        // humidity
        var dayFiveHumidity = (response.list[36].main.humidity)
        console.log(dayFiveHumidity)
        var dayFiveHumidityDiv = $("<div>")
        dayFiveHumidityDiv.text("Humidity:  " + dayFiveHumidity + "%")

        dayFiveDiv.append(dayFiveDateDiv, dayFiveWeatherDiv, dayFiveTempCDiv, dayFiveHumidityDiv)
        $("#dayFive").append(dayFiveDiv)

















    })
















})


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
// })



