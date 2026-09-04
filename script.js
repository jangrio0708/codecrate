document.addEventListener("DOMContentLoaded", function () {
  var year = new Date().getFullYear();
  document.querySelectorAll("#year").forEach(function (el) { el.textContent = year; });
  var updatedEl = document.getElementById("year-updated");
  if (updatedEl) updatedEl.textContent = year;
});
