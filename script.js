const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Please provide a phone number");
  } else if (regex.test(input.value.trim())) {
    result.insertAdjacentHTML(
      "beforeend",
      `<div class="gre">Valid US number: ${input.value}</div>`
    );
    input.value = "";
  } else if (regex.test(input.value.trim()) === false) {
    result.insertAdjacentHTML(
      "beforeend",
      `<div class="red">invalid US number: ${input.value}</div>`
    );
    input.value = "";
  }
  console.log(regex.test(input.value));
});
clearBtn.addEventListener("click", () => {
  result.innerHTML = "";
});

const regex =
  /^([1{1}]?\s?(\(\d{3}\)|\d{3})(?:\s|-{1})?[0-9]{3}(?:\s|-{1})?[0-9]{4})$/g;
