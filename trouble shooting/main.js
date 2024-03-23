let changeTheme = document.querySelector(".theme-toggle")
let modeMoon = document.querySelector("#moonMode");
let modeSun = document.querySelector("#sunMode")

changeTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark-theme")
    if (modeMoon.style.display !== "none") {
        modeMoon.style.display = "none";
        modeSun.style.display = "inline";
    } else {
        modeMoon.style.display = "inline";
        modeSun.style.display = "none";
    }

})