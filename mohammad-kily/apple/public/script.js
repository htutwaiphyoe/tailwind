const humburgerIcon = document.getElementById("humburger");

humburgerIcon.addEventListener("click", function () {
  document.getElementById("collapse-navbar").classList.toggle("hidden");
  document.getElementById("collapse-navbar").classList.toggle("block");
});
