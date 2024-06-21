const containerEl = document.querySelector(".container");
const arrayEl = [
  "Yotuber ",
  "Web Develaper ",
  "Artist ",
  "Instructor ",
  "Freelancer ",
];

var characterindex = 0;
var index = 0;
showtext();
function showtext() {
  containerEl.innerHTML = `
    <h1>I am ${arrayEl[index].slice(0, 1) === "I" ? "an" : "a"} ${arrayEl[
    index
  ].slice(0, characterindex)}</h1>`;
  characterindex++;
  if (characterindex === arrayEl[index].length) {
    characterindex = 0;
    index++;
  }
  if (index === arrayEl.length) {
    index = 0;
  }
  setTimeout(showtext, 500);
}
