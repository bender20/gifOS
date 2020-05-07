function random() {
    let arrayFull = [];
    let found = fetch("https://api.giphy.com/v1/gifs/search?api_key=HIKUFU492H0mGA1otOdtzQRCTT03fwec&q=gif&limit=4&lang=en")
    .then((response) => {
        return response.json()
    }).then(data => {
        return data;
    }).catch((error) => {
        return error;
    })
    found.then(function(response) {
        arrayFull = response.data;
        arrayFull.forEach(function(elem) {
            document.getElementById("video").src = elem.images.original.url;
            document.getElementById("hast").innerHTML = elem.title;
            let nodeOriginal = document.getElementById("containerRandom");
            let nodeClone = nodeOriginal.cloneNode(true);
            document.getElementById("gridIdRandom").appendChild(nodeClone);
        });
        let task = document.querySelector("#containerRandom");
        task.parentNode.removeChild(task);
    });
    return found;
}
random();