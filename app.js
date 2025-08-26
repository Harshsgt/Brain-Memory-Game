let cardsArray = [
  { name: "CSS", img: "Assets/css logo.png" },
  { name: "HTML", img: "Assets/Html logo.png" },
  { name: "JQuery", img: "Assets/jquery logo.png" },
  { name: "JS", img: "Assets/js logo.png" },
  { name: "Node", img: "Assets/node logo.png" },
  { name: "Python", img: "Assets/python logo.jpeg" },
];

const parentDiv = document.querySelector("#card-section");
const gameCard = cardsArray.concat(cardsArray);
console.log(gameCard);
let shuffledChild=Array.from(gameCard).sort(() => 0.5 - Math.random());


for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;

  childDiv.style.backgroundImage = `url("${shuffledChild[i].img}")`;

  parentDiv.appendChild(childDiv);
}
