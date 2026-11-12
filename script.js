document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const infoBox = document.getElementById("landmark-info");
  const buttons = document.querySelectorAll(".landmark-btn");

  yearSpan.textContent = new Date().getFullYear();

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      infoBox.textContent = button.dataset.info;
    });
  });
});
