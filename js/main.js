const nextButton = document.querySelector(".btn");

const mainContainer = document.querySelector("#main-container");
nextButton.addEventListener("click", () => {
    mainContainer.style.animationName = "sliding";
    setTimeout(() => {
        mainContainer.style.animationName = "";
    }, 1000);
});
