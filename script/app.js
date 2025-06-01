const items = document.querySelectorAll("#infoPoints > li");

function toggleDone(e) {
    console.log(e.target.classList)
    e.target.classList.toggle("infoPoints-post");
}

items.forEach((item) => {
    item.addEventListener("click", toggleDone);
});

