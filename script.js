let memeButton = document.getElementById("meme_button"); 
let requestURL = "https://api.imgflip.com/get_memes";


memeButton.onclick = function () {
    function displayPhoto(json) {
        let photoObject = json.data.memes[randInt(json.data.memes.length)];
        console.log(photoObject);

        let imgContainer = document.querySelector("img");
        imgContainer.src = photoObject.url;
    }

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
    
        .then(displayPhoto)

        .catch(function (error) {
            console.log("Error during fetch:", error);
        });

    function randInt(upperLimit) {
        return Math.floor(Math.random() * upperLimit);
    }
}




