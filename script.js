document.addEventListener("DOMContentLoaded", function () {
  const headerBtn = document.getElementById("headerBtn");

  headerBtn.addEventListener("click", function () {
    const saunasSection = document.querySelector("#saunas");
    if (saunasSection) {
      saunasSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});
