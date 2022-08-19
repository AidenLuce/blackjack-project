// let cardType = ['hearts', 'clubs', 'diamonds', 'spades']
// cardType = [Math.floor(Math.random()*cardType.length)]
// let cardValue = Math.floor(Math.random() * (0 ,10)+1)
// console.log(cardType)
let card = {
    value: Math.floor(Math.random() * (0 ,10)+1),
    type:'spades',
}
let typeAndValue = (card.value + " of " + card.type)
console.log(typeAndValue)
let player = {

    playersCards: [typeAndValue,typeAndValue ],
}
console.log(player.playersCards)

let hitOrStay = confirm