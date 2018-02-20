$("#weather-form").submit(function(e) {
    e.preventDefault();
    $("#city-weather").html("");
    $("#current-forecast").html("");
    latLon.newLat = $("#latitude").val();
    latLon.newLon = $("#longitude").val();
    forecast(latLon);
    $("#weather-form")[0].reset();
});

var latLon = {
    "newLat": 29.423017,
    "newLon": -98.48527
};

function forecast(latLon){
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        // APPID: "6b39ba7f261b18c838abccbbdd423f34",
        APPID: "7f8e3aa0aad113510e0c1eaafd1c17b8",
        lat: latLon.newLat,
        lon: latLon.newLon,
        units: "imperial"
    }).done(function(data) {
        // console.log(data);
        $("#city-weather").append(data.city.name);
        for (i = 0; i < 3; i++) {
            var htmlString = "";
            htmlString += "<div class=\"weather-module\">";
            htmlString += "<h1>" + data.list[i].temp.max + " °/ " + data.list[i].temp.min + "°</h1>";
            htmlString += "<img src=\'http://openweathermap.org/img/w/" + data.list[i].weather["0"].icon + ".png\'><br>";
            htmlString += "<strong>Clouds: </strong>" + data.list[i].weather["0"].description;
            htmlString += "<br><strong>Humidity: </strong>" + data.list[i].humidity;
            htmlString += "<br><strong>Wind: </strong>" + data.list[i].speed;
            htmlString += "<br><strong>pressure: </strong>" + data.list[i].pressure;
            htmlString += "</div>";
            $("#current-forecast").append(htmlString);
        }
        console.log(data.list[0].weather["0"].icon);
        if (data.list[0].weather["0"].icon === "01d"){
            $("html").css({"background-image":"url(\"./images/clear-sky-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "01n"){
            $("html").css({"background-image":"url(\"./images/clear-sky-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "02d"){
            $("html").css({"background-image":"url(\"./images/few-clouds-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "02n"){
            $("html").css({"background-image":"url(\"./images/few-clouds-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "03d"){
            $("html").css({"background-image":"url(\"./images/scattered-clouds-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "03n"){
            $("html").css({"background-image":"url(\"./images/scattered-clouds-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "04d"){
            $("html").css({"background-image":"url(\"./images/broken-clouds-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "04n"){
            $("html").css({"background-image":"url(\"./images/broken-clouds-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "09d"){
            $("html").css({"background-image":"url(\"./images/shower-rain-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "09n"){
            $("html").css({"background-image":"url(\"./images/shower-rain-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "10d"){
            $("html").css({"background-image":"url(\"./images/rain-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "10n"){
            $("html").css({"background-image":"url(\"./images/rain-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "11d"){
            $("html").css({"background-image":"url(\"./images/thunderstorm-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "11n"){
            $("html").css({"background-image":"url(\"./images/thunderstorm-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "13d"){
            $("html").css({"background-image":"url(\"./images/snow-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "13n"){
            $("html").css({"background-image":"url(\"./images/snow-night.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "50d"){
            $("html").css({"background-image":"url(\"./images/mist-day.jpg\")"})
        }
        if (data.list[0].weather["0"].icon === "50n"){
            $("html").css({"background-image":"url(\"./images/mist-night.jpg\")"})
        }
    });
}

forecast(latLon);

///MAP///

function myMap() {
    var mapCanvas = document.getElementById("map");
    var myCenter=new google.maps.LatLng(29.4260,-98.4861);
    var mapOptions = {center: myCenter, zoom: 11};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(map, event.latLng);
    });
}
var markers = [];
function placeMarker(map, location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
    // var infowindow = new google.maps.InfoWindow({
    //     content: 'Latitude: ' + location.lat() + '<br>Longitude: ' + location.lng()
    // });
    // infowindow.open(map,marker);
    var stringLon = (location.lng()).toString();
    var stringLat = (location.lat()).toString();
    latLon.newLat = stringLat;
    latLon.newLon = stringLon;
    $("#city-weather").html("");
    $("#current-forecast").html("");
    forecast(latLon);
}

function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function clearMarkers() {
    setMapOnAll(null);
}

// function showMarkers() {
//     setMapOnAll(map);
// }

function deleteMarkers() {
    clearMarkers();
    markers = [];
}


myMap();
