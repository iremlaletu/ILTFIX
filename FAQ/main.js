let changeTheme = document.querySelector(".theme-toggle");
let modeMoon = document.querySelector("#moonMode");
let modeSun = document.querySelector("#sunMode");
let questionBtns = document.querySelectorAll('.question-btn');

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

questionBtns.forEach((btns) => {
    btns.addEventListener('click', (e) =>{
        const eachQuestion = e.currentTarget.parentElement.parentElement
        eachQuestion.classList.toggle('show-text')
    })
})
