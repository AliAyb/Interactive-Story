const mainContainer = document.querySelector("#main-container");

const resetButton = document.querySelector(".reset-game");

function slideAnimation() {
    mainContainer.style.animationName = "sliding";
    setTimeout(() => {
        mainContainer.style.animationName = "";
    }, 1000);
}

resetButton.addEventListener("click", () => {
    if (confirm("Are you sure you want to reset the game ?")) {
        location.href = "/";
    }
})