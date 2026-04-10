document.querySelectorAll(".likeBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("fas");
    btn.classList.toggle("far");
  });
});