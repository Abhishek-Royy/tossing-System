let headElement = document.querySelector("#head");
let tailElement = document.querySelector("#tail");
let display = document.querySelector(".decision");
const decision = () => {
  let result = Math.floor(Math.random() * 2);
  if (result === 0) {
    headElement.innerText = "Head Winner";
    tailElement.innerText = ""; // Clear the other side
  } else {
    tailElement.innerText = "Tail Winner";
    headElement.innerText = ""; // Clear the other side
  }
};

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  display.style.display = "none";
  setTimeout(() => {
    // Add a delay to simulate loading
    display.style.display = "block";
    decision();
  }, 1000);
});
