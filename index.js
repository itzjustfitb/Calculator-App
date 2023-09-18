let result = document.getElementById("result");
let reset = document.getElementById("reset");
let errorModal = document.getElementsByClassName("error_modal")[0];
let remove = document.getElementById("remove");
let error_modal_container = document.getElementById("error_modal_container");
let body = document.body;
let calculator_container = document.getElementById("calculator_container");

function calculate(number) {
  result.value += number;
}

function resultValue() {
  try {
    if (result.value == undefined) {
      console.log("salam");
    }
    result.value = eval(result.value);
  } catch (error) {
    errorModal.classList.add("appear");
    error_modal_container.style.top = "0";
    remove.addEventListener("click", () => {
      error_modal_container.style.top = "-1000px";
      errorModal.classList.remove("appear");
    });
    calculator_container.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    error_modal_container.addEventListener("click", (e) => {
      e.stopPropagation();
    });

    body.addEventListener("click", () => {
      errorModal.classList.remove("appear");
      error_modal_container.style.top = "-1000px";
    });

    result.value = " ";
  }
}

function del() {
  result.value = result.value.slice(0, -1);
}

function clr() {
  result.value = " ";
}
