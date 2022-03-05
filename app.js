const cardArray=[
    {
        name:'fries',
        img:'./images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'./images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'./images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'./images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'./images/milkshake.png'
    },
    {
        name:'pizza',
        img:'./images/pizza.png'
    },
    {
        name:'fries',
        img:'./images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'./images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img:'./images/hotdog.png'
    },
    {
        name:'ice-cream',
        img:'./images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'./images/milkshake.png'
    },
    {
        name:'pizza',
        img:'./images/pizza.png'
    },
]
cardArray.sort(()=>0.5 - Math.random())
const gridDisplay=document.querySelector("#grid")
const result=document.querySelector('#Result');
let cardChosen=[];
let cardChosenIds=[];
const cardsWon=[];

function creatBoard(){
    for(let i=0;i<cardArray.length; i++){
        const card=document.createElement('img');
        card.setAttribute('src','./images/blank.png');
        card.setAttribute('data-id',i);
        card.addEventListener('click',flipCart);
        gridDisplay.appendChild(card);

    }
}
creatBoard()
function checkMatch(){
    const cards = document.querySelectorAll('img')
    const optionOneId=cardChosenIds[0]
    const optionTwoId=cardChosenIds[1]
    if(optionOneId==optionTwoId){
        cards[optionOneId].setAttribute('src','./images/blank.png');
        cards[optionTwoId].setAttribute('src','./images/blank.png');
        alert('You have click the same image')
    }


    console.log("check for match")
    if(cardChosen[0]===cardChosen[1]){
        alert("You found a Match!!")
        cards[optionOneId].setAttribute('src','./images/white.png');
        cards[optionTwoId].setAttribute('src','./images/white.png');
        cards[optionOneId].removeEventListener('click',flipCart);
        cards[optionTwoId].removeEventListener('click',flipCart);
        cardsWon.push(cardChosen);
        console.log(cardsWon);
    } else {
        cards[optionOneId].setAttribute('src','./images/blank.png');
        cards[optionTwoId].setAttribute('src','./images/blank.png');
        alert("sorry try again!")
    }
    result.innerHTML=cardsWon.length
    cardChosen=[]
    cardChosenIds=[]
    if(cardsWon.length==6){
        result.innerHTML='Congratulations you found them all'
    }
}
function flipCart(){
    console.log(cardArray)
    const cardId=this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenIds.push(cardId);
    console.log(cardChosenIds)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardChosen.length===2){
        setTimeout(checkMatch,500)
    }
}
















