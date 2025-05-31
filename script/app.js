const bulletPoints = document.querySelector("bullet-points")

function toggleDone(e) {
    if (!e.target.className) {
        e.target.className = "info-points";
    } else {
        e.target.className = "";
    }
}

listItems.forEach((item) => {
    item.addEventListener("click", toggleDone);
});
