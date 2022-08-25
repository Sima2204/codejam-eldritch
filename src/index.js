import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";
import { brownCards, blueCards, greenCards } from "./data/mythicCards/index.js";
import cardsDataBrown from "./data/mythicCards/brown/index.js";
import cardsDataGreen from "./data/mythicCards/green/index.js";
import cardsDataBlue from "./data/mythicCards/blue/index.js";

// количество всех карт всех уровней по цветам
let green =
  ancientsData[0].firstStage.greenCards +
  ancientsData[0].secondStage.greenCards +
  ancientsData[0].thirdStage.greenCards;
let brown =
  ancientsData[0].firstStage.brownCards +
  ancientsData[0].secondStage.brownCards +
  ancientsData[0].thirdStage.brownCards;
let blue =
  ancientsData[0].firstStage.blueCards +
  ancientsData[0].secondStage.blueCards +
  ancientsData[0].thirdStage.blueCards;

// собираем все зеленые карты normal
let greenCardsNormalLevel = [];
function collectGreenCards() {
  for (let i = 0; i < cardsDataGreen.length; i++) {
    if (greenCards[i].difficulty === "normal") {
      greenCardsNormalLevel.push(greenCards[i]);
    }
  }
}
collectGreenCards();
// console.log(greenCardsNormalLevel);

// собираем все коричневые карты normal
let brownCardsNormalLevel = [];
function collectBrownCards() {
  for (let i = 0; i < cardsDataBrown.length; i++) {
    if (brownCards[i].difficulty === "normal") {
      brownCardsNormalLevel.push(brownCards[i]);
    }
  }
}
collectBrownCards();
// console.log(brownCardsNormalLevel);

// собираем все синие карты normal
let blueCardsNormalLevel = [];
function collectBlueCards() {
  for (let i = 0; i < cardsDataBlue.length; i++) {
    if (blueCards[i].difficulty === "normal") {
      blueCardsNormalLevel.push(blueCards[i]);
    }
  }
}
collectBlueCards();
// console.log(blueCardsNormalLevel);

// собираем карты на все три стейджа normal
const shuffledGreen = greenCardsNormalLevel.sort(() => 0.5 - Math.random());
let selectedGreen = shuffledGreen.slice(0, 5);
// console.log(selectedGreen);

const shuffledBlue = blueCardsNormalLevel.sort(() => 0.5 - Math.random());
let selectedBlue = shuffledBlue.slice(0, 2);
// console.log(selectedBlue);

const shuffledBrown = brownCardsNormalLevel.sort(() => 0.5 - Math.random());
let selectedBrown = shuffledBrown.slice(0, 9);
// console.log(selectedBrown);

// распределение по стейджам
let firstStageCards = [];
firstStageCards.push(selectedGreen[0]);
firstStageCards.push(selectedBlue[0]);
firstStageCards.push(selectedBrown[0]);
firstStageCards.push(selectedBrown[1]);

let secondStageCards = [];
secondStageCards.push(selectedGreen[1]);
secondStageCards.push(selectedGreen[2]);
secondStageCards.push(selectedBlue[1]);
secondStageCards.push(selectedBrown[2]);
secondStageCards.push(selectedBrown[3]);
secondStageCards.push(selectedBrown[4]);

let thirdStageCards = [];
thirdStageCards.push(selectedGreen[3]);
thirdStageCards.push(selectedGreen[4]);
thirdStageCards.push(selectedBrown[5]);
thirdStageCards.push(selectedBrown[6]);
thirdStageCards.push(selectedBrown[7]);
thirdStageCards.push(selectedBrown[8]);

// перемешиваем три колоды
function shuffle(arr) {
  arr.sort(() => Math.random() - 0.5);
}

shuffle(firstStageCards);
shuffle(secondStageCards);
shuffle(thirdStageCards);
// console.log(firstStageCards);
// console.log(secondStageCards);
// console.log(thirdStageCards);

// собираем одну колоду
let finalCards = thirdStageCards.concat(secondStageCards, firstStageCards);
console.log(finalCards);

// достаем карты по очереди по одной и убираем из колоды
function showCard(x) {
  if (x.length != 0) {
    console.log(x.pop());
  }
}

const cardBackSide = document.querySelector(".card_back_side");
cardBackSide.addEventListener("click", showCard(finalCards));
