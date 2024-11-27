//LA

function updateTimeCity() {

//Los Angeles
    let losAng = document.querySelector("#los-angeles");
    if (losAng) {
        let dateLA = losAng.querySelector(".date");
        let timeLA = losAng.querySelector(".time");
    

        let currentTime = moment().tz("America/Los_Angeles");
        dateLA.innerHTML = currentTime.format("MMMM Do YYYY");
        timeLA.innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
    };

//Sydney
    let sydney = document.querySelector("#sydney");
    if (sydney) {
        let dateSy = sydney.querySelector(".date");
        let timeSy = sydney.querySelector(".time");
        
    
        let currentTime = moment().tz("Australia/Sydney");
        dateSy.innerHTML = currentTime.format("MMMM Do YYYY");
        timeSy.innerHTML = currentTime.format("h:mm:ss [<small>]A[</small>]");
    };
    
};

function updateCity(event){
    let timeZone = event.target.value;
    let cityName = timeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(timeZone);
    let cityElementDiv = document.querySelector("#cities");
    cityElementDiv.innerHTML = `
        <div class="city">
            <div>
                <h2>${cityName}</h2>
                <div class="date">
                    ${cityTime.format("MMMM Do YYYY")}
                </div>
            </div>
            <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
            </div>
        </div>
    `
}
updateTimeCity();
setInterval(updateTimeCity, 1000);

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);