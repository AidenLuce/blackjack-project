// let cardType = ['hearts', 'clubs', 'diamonds', 'spades']
// cardType = [Math.floor(Math.random()*cardType.length)]
// let cardValue = Math.floor(Math.random() * (0 ,10)+1)
// console.log(cardType)
let card = {
    value: () => Math.floor(Math.random() * (0 , 10) + 1),
    type: () => Math.floor(Math.random() * (0 , 4) + 1),
    checkType: function (type) {
        if (type === 1) {
            return 'Hearts'
        } else if (type === 2) {
            return 'Spades'
        } else if (type === 3) {
            return 'Diamonds'
        } else if (type === 4) {
            return 'Clubs'
        }
    },
}
// let typeAndValue1 = (card.value() + " of " + card.checkType(card.type()))
// let typeAndValue2 = (card.value() + " of " + card.checkType(card.type()))
/** */
let cardValue1 = card.value()
let cardValue2 = card.value()
let cardType1 = card.checkType(card.type())
let cardType2 = card.checkType(card.type())

let typeAndValue1 = (`${cardValue1} of ${cardType1}`);
let typeAndValue2 = (`${cardValue2} of ${cardType2}`);
/** */
let player = {

    playersCards: [`Your cards are ${typeAndValue1} and ${typeAndValue2}`],
}
console.log( player.playersCards)




