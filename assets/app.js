/*

https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=c7c92f78a10b96b8086988432a4f4cf5&artist=cher&track=believe&format=json

*/

// Given input1(Start) input2(End) input 3(Track) input4(Artist)

// Given submit button(submitBtn)

// Take text from each input upon button click
// Store each in a variable

const startLocation = document.getElementById("starting-location").value;
const endLocation = document.getElementById("ending-location").value;
const trackName = document.getElementById("song-title").value;
const artistName = document.getElementById("artist-name").value;

// If re-formatting of input is necessary to be concatenated--do it below
// toLowerCase()    ???

//Take variable value and concatenate into respective, provided queryURLs



function getTrackLength(artist, track) {

    const apiKey = "c7c92f78a10b96b8086988432a4f4cf5"; // my api key for last.fm audioscrobbler

    const queryURL = "https://ws.audioscrobbler.com/2.0/?method=track.getInfo" + "&api_key=" + apiKey + "&artist=" + artist + "&track=" + track + "&format=json"; // queryURL to be used in fetch 




    fetch(queryURL).then(function (response) {
        return response.json()
    }).then(function (responseJson) {
        console.log(responseJson);  // console log json to check integrity

        const songLength = parseInt(responseJson.track.duration) / 1000;
        console.log("song length:", songLength);
})

}

getTrackLength("pavement", "spit on a stranger");

function getDirectionInfo(fromLocation, toLocation) {
    const apiKey = "1ar8EgSpyQGUCgm8HV9dyZhG7AWbPq7a"

    const queryURL = "http://www.mapquestapi.com/directions/v2/route?key=" + apiKey + "&from=" + fromLocation + "&to=" + toLocation + "&unit=m";

    console.log(queryURL);

    fetch(queryURL).then(function (response) {
        return response.json();
    }).then(function (responseJson) {
        console.log(responseJson);

        distanceInMiles = responseJson.route.distance;
        distanceInKm = distanceInMiles * 1.609344;
        driveTime = responseJson.route.time;

        console.log("drive time: ", driveTime);
        console.log("distance in miles: ", distanceInMiles);
        console.log("distance in km: ", distanceInKm);
    })
}

getDirectionInfo("1890 Buford Ave, Saint Paul, MN", "11367 Fowlers Mill Rd, Chardon, OH 44024");

