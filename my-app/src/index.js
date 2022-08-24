import ancientsData from './data/ancients.js';
import difficulties from './data/difficulties.js';
import {
  brownCards,
  blueCards,
  greenCards
} from './data/mythicCards/index.js';
import cardsDataBrown from './data/mythicCards/brown/index.js'
import cardsDataGreen from './data/mythicCards/green/index.js'
import cardsDataBlue from './data/mythicCards/blue/index.js'

// количество всех карт всех уровней по цветам
let green = ancientsData[0].firstStage.greenCards + ancientsData[0].secondStage.greenCards + ancientsData[0].thirdStage.greenCards;
let brown = ancientsData[0].firstStage.brownCards + ancientsData[0].secondStage.brownCards + ancientsData[0].thirdStage.brownCards;
let blue = ancientsData[0].firstStage.blueCards + ancientsData[0].secondStage.blueCards + ancientsData[0].thirdStage.blueCards;

// собрали все зеленые карты normal
let greenCardsNormalLevel = [];
function collectGreenCards() {
  for (let i = 0; i < cardsDataGreen.length; i++) {
    if (greenCards[i].difficulty === 'normal') {
      greenCardsNormalLevel.push(greenCards[i]);
    }
  }
}
collectGreenCards();
console.log(greenCardsNormalLevel);

// собрали все коричневые карты normal
let brownCardsNormalLevel = [];
function collectBrownCards() {
  for (let i = 0; i < cardsDataBrown.length; i++) {
    if (brownCards[i].difficulty === 'normal') {
      brownCardsNormalLevel.push(brownCards[i]);
    }
  }
}
collectBrownCards();
console.log(brownCardsNormalLevel);

// собрали все синие карты normal
let blueCardsNormalLevel = [];
function collectBlueCards() {
  for (let i = 0; i < cardsDataBlue.length; i++) {
    if (blueCards[i].difficulty === 'normal') {
      blueCardsNormalLevel.push(blueCards[i]);
    }
  }
}
collectBlueCards();
console.log(blueCardsNormalLevel);
