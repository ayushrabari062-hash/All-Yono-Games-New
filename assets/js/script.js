document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById("searchBox");
  const cards = Array.from(document.querySelectorAll(".app-card"));
  if (searchBox) {
    searchBox.addEventListener("input", function () {
      const query = searchBox.value.trim().toLocaleLowerCase();
      cards.forEach(function (card) {
        const content = (card.textContent || "").toLocaleLowerCase();
        card.style.display = content.includes(query) ? "" : "none";
      });
    });
  }
});
function shareWebsite() {
  const url = window.location.href;
  if (navigator.share) {
    navigator.share({title:"All Yono Games",text:"Explore gaming app listings",url:url}).catch(function(){});
  } else if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(function(){alert("Link copied!");}).catch(function(){window.prompt("Copy this link:",url);});
  } else { window.prompt("Copy this link:",url); }
}
