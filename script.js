const opening = document.getElementById("opening");
const seal = document.getElementById("waxSeal");
const envelope = document.getElementById("envelopeWrap");
const website = document.getElementById("website");

const playButton = document.getElementById("playButton");
const song = document.getElementById("song");

let opened = false;


/* =========================
   OPEN ENVELOPE
========================= */

seal.addEventListener("click", () => {

  if (opened) return;

  opened = true;

  seal.style.transform = "translate(-50%, -50%) scale(1.2)";

  envelope.style.transform = "translateY(8px) scale(1.03)";

  setTimeout(() => {
    opening.classList.add("opened");
    website.classList.add("visible");
    document.body.style.overflow = "auto";
    showTeddyPopper();
  }, 650);

});


/* =========================
   MUSIC
========================= */

playButton.addEventListener("click", () => {

  if (song.paused) {

    song.play()
      .then(() => {
        playButton.querySelector("span").textContent = "Ⅱ";
        playButton.querySelector("b").textContent = "Pause";
      })
      .catch(() => {
        alert(
          "Add your authorised audio file as 'soniyo.mp3' to this repository first."
        );
      });

  } else {

    song.pause();

    playButton.querySelector("span").textContent = "▶";
    playButton.querySelector("b").textContent = "Play";

  }

});


song.addEventListener("ended", () => {

  playButton.querySelector("span").textContent = "▶";
  playButton.querySelector("b").textContent = "Play";

});


/* =========================
   INITIAL STATE
========================= */

document.body.style.overflow = "hidden";

// 🧸 Teddy Popper effect
const teddyPopper = document.getElementById("teddyPopper");

function showTeddyPopper() {
  if (teddyPopper) {
    teddyPopper.classList.add("show");

    setTimeout(() => {
      teddyPopper.classList.remove("show");
    }, 3500);
  }
}
