document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-go]");
  if (!target) return;

  const nextId = target.getAttribute("data-go");
  const current = document.querySelector(".scene.active");
  const next = document.getElementById(nextId);

  if (!next) return;

  current.classList.remove("active");
  next.classList.add("active");
});