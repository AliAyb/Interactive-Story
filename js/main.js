const mainContainer = document.querySelector("#main-container");

function slideAnimation() {
    mainContainer.style.animationName = "sliding";
    setTimeout(() => {
        mainContainer.style.animationName = "";
    }, 1000);
}
