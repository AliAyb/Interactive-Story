const link = document.querySelector(".link");

const radios = document.querySelectorAll("[type = 'radio']");

link.href = radios[0].value;

radios.forEach(radio => {
    radio.addEventListener("click", () => {
        link.href = radio.value;
    })
});
