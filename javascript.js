



    var date =(moment().format("L"))
console.log(date)



$("#add-city").on("click", function () {
    event.preventDefault()

    $("#dayForcast").empty()
    console.log("works")
    var location = $("#city-input").val().trim();
    console.log(location)

   var  APIKey = "20c488e0a9aff750eabd58301c43b3ce"
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+location +"&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response)
        
    
        
     var weatherDiv =  $("<div>")
     var cityDiv = $("<div>")
     var City = (response.name)
        console.log(City)
        cityDiv.text(City +" " + date)

       




        var k = (response.main.temp)
        var f = (k -273.5)* 1.80 +32
        console.log(k)
        console.log(f.toFixed(2))
        var tempDIv = $("<div>")
        tempDIv.text("Temperature : " +f.toFixed(2) +"F")



        var humidity = (response.main.humidity)
        console.log(humidity)
        var humidityDiv = $("<div>")
        humidityDiv.text("Humidity :  " + humidity +" %")

        var windSpeed = (response.wind.speed)
       console.log(windSpeed)
        var windSpeedDiv = $("<div>")
        windSpeedDiv.text("Wind Speed : " + windSpeed +" MPH")
       
       $(weatherDiv).append(cityDiv,tempDIv, humidityDiv ,windSpeedDiv)

       $("#dayForcast").append(weatherDiv)
       
       
       
       
       
        // $("#OneDayWeather")






    })
})


$("#addACity").on("click", function () {
    event.preventDefault()
    console.log("works")
    var location = $("#multiDayInput").val();
    console.log(location)

   var  APIKey = "20c488e0a9aff750eabd58301c43b3ce"
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+location+"&appid=" +APIKey
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(queryURL)
        console.log(response)








    })
})



