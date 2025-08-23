let cardsArray = [
  { name: "CSS", 
    img: "Assets/css logo.png" },
  { name: "HTML", 
    img: "Assets/Html logo.png" },
  { name: "JQuery",
     img: "Assets/jquery logo.png" },
  { name: "JS", 
    img: "Assets/js logo.png" },
  { name: "Node", 
    img: "Assets/node logo.png" },
  { name: "Python",
     img: "Assets/python logo.jpeg" },
];

const parentDiv = document.querySelector("#card-section");

for (let i = 0; i < cardsArray.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = cardsArray[i].name;

  childDiv.style.backgroundImage = `url("${cardsArray[i].img}")`;

  parentDiv.appendChild(childDiv);
}
