var input = document.querySelector(".search");
var button = document.querySelectorAll(".button");

button.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value === "C") {
      input.value = " ";
    } else if (button.value === "De") {
      input.value = input.value.slice(0, -1);
    } else if (button.value === "=") {
      input.value = eval(input.value);
    } else if (button.value) {
      input.value += button.value;
    } else {
      alert("please enter correct value");
    }
  });
});
