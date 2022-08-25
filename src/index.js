import ancientsData from "./data/ancients.js";
import difficulties from "./data/difficulties.js";
import { brownCards, blueCards, greenCards } from "./data/mythicCards/index.js";
import { shuffle } from "./helper.js";

const DIFFICULTY_LEVEL_NORMAL = 'normal';
const AZATHOTH_INDEX = 0;

// добавляем цифры в счетчике
const one = document.getElementById("1");
const two = document.getElementById("2");
const three = document.getElementById("3");
const four = document.getElementById("4");
const five = document.getElementById("5");
const six = document.getElementById("6");
const seven = document.getElementById("7");
const eight = document.getElementById("8");
const nine = document.getElementById("9");

setValues(ancientsData, AZATHOTH_INDEX);

const cardsQuantity = getCardsQuantity(ancientsData, AZATHOTH_INDEX);

const allCards = getAllCards(greenCards, blueCards, brownCards, DIFFICULTY_LEVEL_NORMAL, cardsQuantity);

const finalCards = getFinalCards(allCards, ancientsData, AZATHOTH_INDEX);

function getCardsQuantity(ancientsData, ancientIndex) {
  const cardsQuantity = [0, 0, 0];

  const firstStageValues = Object.values(ancientsData[ancientIndex].firstStage);
  const secondStageValues = Object.values(ancientsData[ancientIndex].secondStage);
  const thirdStageValues = Object.values(ancientsData[ancientIndex].thirdStage);

  return cardsQuantity.map((value, index) => value + firstStageValues[index] + secondStageValues[index] + thirdStageValues[index]);
}

function getAllCards(greenCards, blueCards, brownCards, difficulty, cardsQuantity) {
  return {
    greenCards: getCardsSetByColorAndDifficulty(greenCards, difficulty, cardsQuantity[0]),
    blueCards: getCardsSetByColorAndDifficulty(blueCards, difficulty, cardsQuantity[1]),
    brownCards: getCardsSetByColorAndDifficulty(brownCards, difficulty, cardsQuantity[2])
  };
};

// функция, которая принимает массив по цвету, фильтрует его по сложности, и выводит перемешанный массив нужного количества
function getCardsSetByColorAndDifficulty(color, difficulty, quantity) {
  return shuffle(color.filter(card => card.difficulty === difficulty)).slice(0, quantity);
};

// распределение по стейджам
function getFinalCards(cards, ancientsData, ancientIndex) {
  const firstStageCards = getCardsByStage(cards, ancientsData[ancientIndex].firstStage);
  const secondStageCards = getCardsByStage(cards, ancientsData[ancientIndex].secondStage);
  const thirdStageCards = getCardsByStage(cards, ancientsData[ancientIndex].thirdStage);

  return thirdStageCards.concat(secondStageCards, firstStageCards);
};

function getCardsByStage(cards, stage) {
  return shuffle(cards.greenCards.splice(0, stage.greenCards).concat(cards.blueCards.splice(0, stage.blueCards), cards.brownCards.splice(0, stage.brownCards)));
};

// устанавливаем значения в стейдж

function setValues(ancientsData, ancientIndex) {
  one.innerHTML = ancientsData[ancientIndex].firstStage.greenCards;
  two.innerHTML = ancientsData[ancientIndex].firstStage.blueCards;
  three.innerHTML = ancientsData[ancientIndex].firstStage.brownCards;
  four.innerHTML = ancientsData[ancientIndex].secondStage.greenCards;
  five.innerHTML = ancientsData[ancientIndex].secondStage.blueCards;
  six.innerHTML = ancientsData[ancientIndex].secondStage.brownCards;
  seven.innerHTML = ancientsData[ancientIndex].thirdStage.greenCards;
  eight.innerHTML = ancientsData[ancientIndex].thirdStage.blueCards;
  nine.innerHTML = ancientsData[ancientIndex].thirdStage.brownCards;
};

// достаем карты по очереди по одной, убираем из колоды, отнимаем число

function showCard() {
  const frontImage = document.querySelector('.card_opened_now');
  const backImage = document.querySelector('.card_back_side');

  if (finalCards.length) {
    const element = finalCards.pop();
    console.log(element);

    frontImage.src = element.cardFace;

    if (element.id.includes('green')) {
      delValues(one, four, seven);
    } else if (element.id.includes('blue')) {
      delValues(two, five, eight);
    } else if (element.id.includes('brown')) {
      delValues(three, six, nine);
    }

  } else {
    backImage.style.display = 'none';
    console.log('here are no more cards left')
  }
};

const cardBackSide = document.querySelector(".card_back_side");
cardBackSide.addEventListener("click", showCard);

// удаляем цифры в счетчике
function delValues(green, blue, brown) {
  if (+green.innerHTML) {
    green.innerHTML -= 1;
  } else if (+blue.innerHTML) {
    blue.innerHTML -= 1;
  } else {
    brown.innerHTML -= 1;
  }
};