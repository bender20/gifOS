let search = null;
function getSearchResults(search) {
    search = document.querySelector("#findBox").value;
    let arrayFull = [];
    let found = fetch("https://api.giphy.com/v1/gifs/search?api_key=HIKUFU492H0mGA1otOdtzQRCTT03fwec&q=" + search +"&limit=24&offset=0&rating=R&lang=es")
    .then((response) => {
    return response.json()
    }).then(data => {
        return data;
    }).catch((error) => {
        return error;
    })
    found.then(function(response) {
        document.querySelector("#gridIdTrend").innerHTML = "";
        let model = '<div id="container" class="videoContainer"><img id="video0" src="" class="video" alt="gif buscado"><div class="videoHast"><p id="hast0" class="pWhiteEfec"></p></div></div>';
        arrayFull = response.data;
        arrayFull.forEach(function(elem) {
            const divCreation = document.createElement("div");
            divCreation.innerHTML = model;
            divCreation.querySelector("#video0").src = elem.images.original.url;
            divCreation.querySelector("#hast0").innerHTML = elem.title;
            let gridIdTrend = document.querySelector("#gridIdTrend");
            gridIdTrend.appendChild(divCreation);
        });
    arrayFull = [];
    });
    return found;
}
function chageToFind() {
    const randomGrid = document.querySelector("#randomGrid");
    randomGrid.style.display ="none";
    document.getElementById("titleWhite").innerText = "Busqueda: " + (document.querySelector(".findBox").value);
    document.getElementById("containerGrid").style.top = "40px";
}
function eventToFind() {
    const findButton = document.querySelector("#findButton");
    findButton.addEventListener("click", getSearchResults);
    findButton.addEventListener("click", chageToFind);
    let findBox = document.querySelector("#findBox");
    findBox.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
        event.preventDefault();
        findButton.click();
        }
    });
}
eventToFind();