//LA

function updateLA() {
    let losAng = document.querySelector("#los-angeles");
    let dateLA = losAng.querySelector(".date");
    let timeLA = losAng.querySelector(".time");
    

    let currentTime = moment().tz("America/Los_Angeles");
    dateLA.innerHTML = currentTime.format("MMMM Do YYYY");
    timeLA.innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
};

updateLA();
setInterval(updateLA, 1000);

//Sedney
function updateSydney() {
    let sydney = document.querySelector("#sydney");
    let dateSy = sydney.querySelector(".date");
    let timeSy = sydney.querySelector(".time");
    

    let currentTime = moment().tz("Australia/Sydney");
    dateSy.innerHTML = currentTime.format("MMMM Do YYYY");
    timeSy.innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
};

updateSydney();
setInterval(updateSydney, 1000);

