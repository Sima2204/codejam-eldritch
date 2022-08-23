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


function totalCards() {
  let green = ancientsData[0].firstStage.greenCards + ancientsData[0].secondStage.greenCards + ancientsData[0].thirdStage.greenCards;
  let brown = ancientsData[0].firstStage.brownCards + ancientsData[0].secondStage.brownCards + ancientsData[0].thirdStage.brownCards;
  let blue = ancientsData[0].firstStage.blueCards + ancientsData[0].secondStage.blueCards + ancientsData[0].thirdStage.blueCards;
}
totalCards();

console.log(cardsDataGreen);

