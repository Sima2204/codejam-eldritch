function getCardsQuantity(ancientsData, ancientIndex) {
    const cardsQuantity = [0, 0, 0];
    const firstStageValues = Object.values(ancientsData[ancientIndex].firstStage);
    const secondStageValues = Object.values(ancientsData[ancientIndex].secondStage);
    const thirdStageValues = Object.values(ancientsData[ancientIndex].thirdStage);

    return cardsQuantity.map(
        (value, index) => value + firstStageValues[index] + secondStageValues[index] + thirdStageValues[index]
    );
}

function getAllCards(greenCards, blueCards, brownCards, difficulty, cardsQuantity) {
    return {
        greenCards: getCardsSetByColorAndDifficulty(greenCards, difficulty, cardsQuantity[0]),
        blueCards: getCardsSetByColorAndDifficulty(blueCards, difficulty, cardsQuantity[1]),
        brownCards: getCardsSetByColorAndDifficulty(brownCards, difficulty, cardsQuantity[2])
    };
}

// функция, которая принимает массив по цвету, фильтрует его по сложности, и выводит перемешанный массив нужного количества
function getCardsSetByColorAndDifficulty(color, difficulty, quantity) {
    return shuffle(color.filter((card) => card.difficulty === difficulty)).slice(0, quantity);
}

// распределение по стейджам
function getFinalCards(cards, ancientsData, ancientIndex) {
    const firstStageCards = getCardsByStage(cards, ancientsData[ancientIndex].firstStage);
    const secondStageCards = getCardsByStage(cards, ancientsData[ancientIndex].secondStage);
    const thirdStageCards = getCardsByStage(cards, ancientsData[ancientIndex].thirdStage);

    return thirdStageCards.concat(secondStageCards, firstStageCards);
}

function getCardsByStage(cards, stage) {
    return shuffle(
        cards.greenCards
            .splice(0, stage.greenCards)
            .concat(cards.blueCards.splice(0, stage.blueCards), cards.brownCards.splice(0, stage.brownCards))
    );
}

function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

export { getCardsQuantity, getAllCards, getFinalCards };
