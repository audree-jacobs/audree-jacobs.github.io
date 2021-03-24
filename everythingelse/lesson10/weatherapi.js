
/* get weather API*/

const cityID = "5604473"

const apiURL = "http://maps.openweathermap.org/maps/2.0/weather/TA2/2.5/forecast?id=" + cityID + "&appid=9ac42a2309a096035cbf30410beb348b"


fetch(apiURL) 
    