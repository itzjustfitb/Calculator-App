let result = document.getElementById("result");
let reset = document.getElementById("reset");
let errorModal = document.getElementsByClassName("error_modal")[0];
let remove = document.getElementById("remove");
let error_modal_container = document.getElementById("error_modal_container");
let body = document.body;
let calculator_container = document.getElementById("calculator_container");

let first_text = document.getElementById("first_text");
let second_text = document.getElementById("second_text");
let wrapper = document.getElementById("wrapper");
let welcoming = document.getElementById("welcoming");
let calculator = document.getElementById("calculator");

function textEffects() {
  setTimeout(() => {
    first_text.style.top = "50%";
    second_text.style.bottom = "50%";
    setTimeout(() => {
      first_text.style.left = "-1000px";
      second_text.style.right = "-1000px";
    }, 1500);
    setTimeout(() => {
      loadingScreen();
    }, 2000);
  }, 2000);
  setTimeout(() => {
    wrapper.style.display = "none";
    welcoming.style.display = "none";
    showCalculator();
  }, 7000);
}

function loadingScreen() {
  wrapper.style.visibility = "visible";
  wrapper.style.opacity = "1";
  setTimeout(() => {
    wrapper.style.visibility = "hidden";
    wrapper.style.opacity = "0";
  }, 2000);
}

function showCalculator() {
  calculator.style.visibility = "visible";
  calculator.style.opacity = "1";
}

textEffects();

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
