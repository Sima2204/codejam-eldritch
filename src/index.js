import ancientsData from './data/ancients.js';
import difficulties from './data/difficulties.js';
import { brownCards, blueCards, greenCards } from './data/mythicCards/index.js';
import { getCardsQuantity, getAllCards, getFinalCards } from './helper.js';

const DIFFICULTY_LEVEL_NORMAL = 'normal';
const azathoth = document.getElementById('first-monster');
const cthulhu = document.getElementById('second-monster');
const iogSothoth = document.getElementById('third-monster');
const shubNiggurath = document.getElementById('fourth-monster');
const azathoth_index = 0;
const cthulhu_index = 1;
const iogSothoth_index = 2;
const shubNiggurath_index = 3;
let monsterIndex;
let finalCards;

const one = document.getElementById('1');
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');

// Добавление функционала на клики
function getCardsByMonster(ancientsData, monsterIndex, difficulty, greenCards, blueCards, brownCards) {
    const cardsQuantity = getCardsQuantity(ancientsData, monsterIndex);
    const allCards = getAllCards(greenCards, blueCards, brownCards, difficulty, cardsQuantity);
    finalCards = getFinalCards(allCards, ancientsData, monsterIndex);
    setValues(ancientsData, monsterIndex);
};

azathoth.onclick = (event) => {
    event.target.classList.add('active');
    cthulhu.classList.remove('active');
    iogSothoth.classList.remove('active');
    shubNiggurath.classList.remove('active');
    getCardsByMonster(ancientsData, azathoth_index, DIFFICULTY_LEVEL_NORMAL, greenCards, blueCards, brownCards);
    document.querySelector('.difficulty').style.display = 'flex';
    document.querySelector('.mix').style.display = 'none';
    document.querySelector('.stages_and_cards_container').style.display = 'none';
    document.querySelector('.card_opened_now').style.display = 'none';
    document.querySelector('.normal').classList.remove('active');
    document.querySelector('.mix').classList.remove('active');
};

cthulhu.onclick = (event) => {
    event.target.classList.add('active');
    azathoth.classList.remove('active');
    iogSothoth.classList.remove('active');
    shubNiggurath.classList.remove('active');
    getCardsByMonster(ancientsData, cthulhu_index, DIFFICULTY_LEVEL_NORMAL, greenCards, blueCards, brownCards);
    document.querySelector('.difficulty').style.display = 'flex';
    document.querySelector('.mix').style.display = 'none';
    document.querySelector('.stages_and_cards_container').style.display = 'none';
    document.querySelector('.card_opened_now').style.display = 'none';
    document.querySelector('.normal').classList.remove('active');
    document.querySelector('.mix').classList.remove('active');
};

iogSothoth.onclick = (event) => {
    event.target.classList.add('active');
    azathoth.classList.remove('active');
    cthulhu.classList.remove('active');
    shubNiggurath.classList.remove('active');
    getCardsByMonster(ancientsData, iogSothoth_index, DIFFICULTY_LEVEL_NORMAL, greenCards, blueCards, brownCards);
    document.querySelector('.difficulty').style.display = 'flex';
    document.querySelector('.mix').style.display = 'none';
    document.querySelector('.stages_and_cards_container').style.display = 'none';
    document.querySelector('.card_opened_now').style.display = 'none';
    document.querySelector('.normal').classList.remove('active');
    document.querySelector('.mix').classList.remove('active');
};

shubNiggurath.onclick = (event) => {
    event.target.classList.add('active');
    azathoth.classList.remove('active');
    cthulhu.classList.remove('active');
    iogSothoth.classList.remove('active');
    getCardsByMonster(ancientsData, shubNiggurath_index, DIFFICULTY_LEVEL_NORMAL, greenCards, blueCards, brownCards);
    document.querySelector('.difficulty').style.display = 'flex';
    document.querySelector('.mix').style.display = 'none';
    document.querySelector('.stages_and_cards_container').style.display = 'none';
    document.querySelector('.card_opened_now').style.display = 'none';
    document.querySelector('.normal').classList.remove('active');
    document.querySelector('.mix').classList.remove('active');
};

document.querySelector('.normal').onclick = function(e) {
  document.querySelector('.mix').style.display = 'flex';
  document.querySelector('.normal').classList.add('active');
};

document.querySelector('.mix').onclick = function(e) {
  document.querySelector('.stages_and_cards_container').style.display = 'flex';
  document.querySelector('.card_back_side').style.display = 'block';
  document.querySelector('.mix').classList.add('active');
};

document.querySelector('.card_back_side').onclick = function(e) {
  document.querySelector('.card_opened_now').style.display = 'block';
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

    document.querySelector('.card_opened_now').style.display = 'block';

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
        
        if (!finalCards.length) {
            backImage.style.display = 'none';
            console.log('GAME OVER! HERE ARE NO MORE CARDS LEFT!');
        }
    } 
};

const cardBackSide = document.querySelector('.card_back_side');
cardBackSide.addEventListener('click', showCard);

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