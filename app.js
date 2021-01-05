const card = document.querySelector(".card");
const container = document.querySelector(".container");

const title = document.querySelector(".title");
const sizes = document.querySelector(".sizes");
const purchase = document.querySelector(".purchase button");
const sneaker = document.querySelector(".sneaker img");
const description = document.querySelector(".info h3");



container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /25;
    let yAxis = (window.innerHeight / 2 - e.pageY) /25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container.addEventListener("mouseenter", (e) => {
    card.style.transition = 'none';
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    purchase.style.transform = "translateZ(75px)";
    sizes.style.transform = "translate(50px)";
});


container.addEventListener("mouseleave", (e) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    title.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
    sizes.style.transform = "translate(0px)";
});