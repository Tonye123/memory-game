document.addEventListener('DOMContentLoaded', () => {

//cards
const cardArray = [
    {
        name: 'circle',
        img: 'images/circle.png'
    },
    {
        name: 'circle',
        img: 'images/circle.png'
    },
    {
        name: 'square',
        img: 'images/square.png'
    },
    {
        name: 'square',
        img: 'images/square.png'
    },
    {
        name: 'diamond',
        img: 'images/diamond.png'
    },
    {
        name: 'diamond',
        img: 'images/diamond.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },
    {
        name: 'heart',
        img: 'images/heart.png'
    },
    {
        name: 'polygon',
        img: 'images/polygon.png'
    },
    {
        name: 'polygon',
        img: 'images/polygon.png'
    },
    {
        name: 'triangle',
        img: 'images/triangle.png'
    },
    {
        name: 'triangle',
        img: 'images/triangle.png'
    },
]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.getElementById('result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create card display board, loop throught the array
function createBoard() {
    cardArray.forEach((cardItem, index)=>{
        //create an img tag element for card
        let card = document.createElement('img')
        //set an attribute on created img tag
        card.setAttribute('src', 'images/back.png')
        card.setAttribute('data-id', index)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)

    })
}




//check for matches
function checkForMatch() {
    //select all 12 cards in a nodeList
    let cards = document.querySelectorAll('img');
    console.log(cards)
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if(cardsChosen[0] === cardsChosen[1]){
        alert('You have a match!')
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', 'images/back.png')
        cards[optionTwoId].setAttribute('src', 'images/back.png')
        alert('Sorry try again!')
    }

    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all'
    }
}


//flip your card
function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}


createBoard();






})