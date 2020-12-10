const heading = document.querySelector("h1");
const audio = new Audio("./asset/audios/kimbug.mp3");

heading.addEventListener("click", e => {
  audio.play();
  if (this.active) {
    this.styleMedia.color = "#000";
  } else {
    this.styleMedia.color = "#fff";
  }

  this.active = !this.active;
});

heading.active = true;
