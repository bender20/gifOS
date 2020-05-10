function trending() {
    fetch("https://api.giphy.com/v1/gifs/trending?api_key=HIKUFU492H0mGA1otOdtzQRCTT03fwec&limit=24&rating=R")
    .then((response) => {
        return response.json()
    }).then(function(response) {
        response.data.forEach(function(elem) {
            document.getElementById("video0").src = elem.images.original.url;
            document.getElementById("hast0").innerHTML = elem.title;
            let nodeOriginal = document.getElementById("container");
            let nodeClone = nodeOriginal.cloneNode(true);
            document.getElementById("gridIdTrend").appendChild(nodeClone);
        });
        let task = document.querySelector("#container");
        task.parentNode.removeChild(task);
    }).catch((error) => {
        return error;
    });
}
trending();