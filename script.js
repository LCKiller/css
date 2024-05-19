// script.js

document.addEventListener("DOMContentLoaded", function() {
  const colorPickerBtn = document.getElementById("colorPickerBtn");
  const colorPicker = document.getElementById("colorPicker");
  const formContainer = document.getElementById("form-container");

  colorPickerBtn.addEventListener("click", function() {
    if (colorPicker.classList.contains("visible")) {
      colorPicker.classList.remove("visible");
    } else {
      colorPicker.classList.add("visible");
      colorPicker.click();
    }
  });

  colorPicker.addEventListener("input", function() {
    formContainer.style.borderLeftColor = colorPicker.value;
  });
});
