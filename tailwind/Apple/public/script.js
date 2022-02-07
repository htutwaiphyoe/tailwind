const humburgerIcon = document.getElementById("humburger");

humburgerIcon.addEventListener("click", function (id) {
  document.getElementById(id).classList.toggle("hidden");
  document.getElementById(id).classList.toggle("block");
});
