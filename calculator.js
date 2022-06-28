let display = "";
let input = document.querySelector("#input");
let idk = document.querySelector("#idk");
let button1 = document.querySelector("#button1");
function execute(e) {
  display += e.target.value;
  input.value = display;
}
button1.addEventListener("click", (e) => execute(e));
document.querySelector("#button2").addEventListener("click", (e) => execute(e));
document.querySelector("#button3").addEventListener("click", (e) => execute(e));
document.querySelector("#button5").addEventListener("click", (e) => execute(e));
document.querySelector("#button4").addEventListener("click", (e) => execute(e));
document.querySelector("#button1").addEventListener("click", (e) => execute(e));
document.querySelector("#button6").addEventListener("click", (e) => execute(e));
document.querySelector("#button7").addEventListener("click", (e) => execute(e));
document.querySelector("#button8").addEventListener("click", (e) => execute(e));
document.querySelector("#button9").addEventListener("click", (e) => execute(e));
document.querySelector("#button0").addEventListener("click", (e) => execute(e));
document.querySelector("#mul").addEventListener("click", (e) => execute(e));
document.querySelector("#add").addEventListener("click", (e) => execute(e));
document.querySelector("#div").addEventListener("click", (e) => execute(e));
document.querySelector("#sub").addEventListener("click", (e) => execute(e));
document.querySelector("#decimal").addEventListener("click", (e) => execute(e));
document.querySelector("#buttono").addEventListener("click", (e) => execute(e));
document.querySelector("#buttonc").addEventListener("click", (e) => execute(e));
let backspace = document.querySelector("#backspace");
backspace.addEventListener("click", () => {
  display = input.value;
  display = display.slice(0, display.length - 1);
  input.value = display;
});
let buttoncal = document.querySelector("#buttoncal");
buttoncal.addEventListener("click", () => {
  try {
    display = eval(display);
    input.value = display;
  } catch (e) {
    alert("invalid expression bro");
  }
});
let allclear = document.querySelector("#allclear");
allclear.addEventListener("click", () => {
  display = "";
  input.value = "";
});
let buttoncalc = document.querySelector("#buttoncalc");
buttoncalc.addEventListener("click", () => {
  try {
    display = eval(display);
    input.value = display;
  } catch (e) {
    alert("Invalid expression!");
  }
});
