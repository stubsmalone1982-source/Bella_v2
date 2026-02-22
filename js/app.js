// Ambience (starts on first Play click, persists across scenes)
const ambience = new Audio("./audio/background-ambience.mp3");
ambience.loop = true;
ambience.volume = 0.55;

let ambienceStarted = false;
function startAmbienceOnce() {
  if (ambienceStarted) return;
  ambienceStarted = true;

  ambience.play().catch(() => {
    // If the browser blocks playback, allow retry on the next click.
    ambienceStarted = false;
  });
}

document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-go]");
  if (!target) return;

  const nextId = target.getAttribute("data-go");
  const current = document.querySelector(".scene.active");
  const next = document.getElementById(nextId);

  if (!next) return;

  // Start ambience on first transition to Page 2
  if (nextId === "p2") startAmbienceOnce();

  current.classList.remove("active");
  next.classList.add("active");
});
