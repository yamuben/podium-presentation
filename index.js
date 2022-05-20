var ml4 = {};
ml4.opacityIn = [0, 1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

// countDown();

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml7 .letters");
// var textWrapper="Benjamin Is Geek"
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

const diplayName = () => {
    // textWrapper.innerHTML="Hello Benjamin"
  clearInterval(ccount);

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml7 .letter",
      translateY: ["1.1em", 0],
      translateX: ["0.55em", 0],
      translateZ: 0,
      rotateZ: [180, 0],
      duration: 750,
      easing: "easeOutExpo",
      delay: (el, i) => 500 * i,
    })
    .add({
      targets: ".ml7",
      opacity: 0,
      duration: 100,
      easing: "easeOutExpo",
      delay: 10000,
    });
};
let j = 5;

const countDown = () => {
  if (j < 0) {
    diplayName();
    j = 5;
  } else {
    j = j - 1;
    for (let i = 1; i < 5; i++) {
      anime
        .timeline({ loop: false })
        .add({
          targets: `.ml4 .letters-${j}`,
          opacity: ml4.opacityIn,
          scale: ml4.scaleIn,
          duration: ml4.durationIn,
        })
        .add({
          targets: `.ml4 .letters-${j}`,
          opacity: 0,
          scale: ml4.scaleOut,
          duration: ml4.durationOut,
          easing: "easeInExpo",
          delay: ml4.delay,
        });
    }
  }
};

var ccount = setInterval(countDown, 2000);

setTimeout(diplayName, 12000);
