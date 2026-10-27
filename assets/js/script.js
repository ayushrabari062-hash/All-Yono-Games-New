const searchBox = document.getElementById("searchBox");

if(searchBox){

searchBox.addEventListener("keyup", function(){

let value = this.value.toLowerCase();

let cards = document.querySelectorAll(".app-card");

cards.forEach(function(card){

let text = card.innerText.toLowerCase();

if(text.indexOf(value) > -1){

card.style.display="flex";

}else{

card.style.display="none";

}

});

});

}

function shareWebsite() {
    if (navigator.share) {
        navigator.share({
            title: "AYUKSHA Free Earning Apps",
            text: "Download all latest Yono Games",
            url: window.location.href
        });
    } else {
        navigator.clipboard.writeText(window.location.href);
        alert("Link Copied!");
    }
}
