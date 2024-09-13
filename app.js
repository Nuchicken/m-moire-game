// Grab a couple of things
const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span')
let playerLives = 10

// link text
playerLivesCount.textContent = playerLives

// generate the data for the cards 
const getData = () => [
  {imgSrc: './images/pokemon/bulbasaurNew.jpg', name: 'bulbasaur'},
  {imgSrc: './images/pokemon/squirtleNew.jpg', name: 'squirtle'},
  {imgSrc: './images/pokemon/vaporeonNew.jpg', name: 'vaporeon'},
  {imgSrc: './images/pokemon/charmanderNew.jpg', name: 'charmander'},
  {imgSrc: './images/pokemon/eveeNew.png', name: 'eve'},
  {imgSrc: './images/pokemon/mewtwoNew.jpg', name: 'mewtwo'},
  {imgSrc: './images/pokemon/pikachuNew.jpg', name: 'pikachu'},
  {imgSrc: './images/pokemon/snorlaxNew.jpg', name: 'snorlax'},
  {imgSrc: './images/pokemon/bulbasaurNew.jpg', name: 'bulbasaur'},
  {imgSrc: './images/pokemon/squirtleNew.jpg', name: 'squirtle'},
  {imgSrc: './images/pokemon/vaporeonNew.jpg', name: 'vaporeon'},
  {imgSrc: './images/pokemon/charmanderNew.jpg', name: 'charmander'},
  {imgSrc: './images/pokemon/eveeNew.png', name: 'eve'},
  {imgSrc: './images/pokemon/mewtwoNew.jpg', name: 'mewtwo'},
  {imgSrc: './images/pokemon/pikachuNew.jpg', name: 'pikachu'},
  {imgSrc: './images/pokemon/snorlaxNew.jpg', name: 'snorlax'},
];

// sort and randomize cards
const randomize = () => {
  // pulls array of objects and sets array as a variable 'cardData'
  const cardData = getData();
  
  // randomizes 'cardData' array
  cardData.sort(() => Math.random() - 0.5);

  // returns randomized array
  return cardData;
}  


// Generate HTML for the cards
const cardGenerator = () => {
  // pulls randomized array and sets it as a variable 'cardData'
  const cardData = randomize();

  // for each item in card data lets generate the card
  cardData.forEach((item) => {
    // generate the html
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');

    // adds classes
    card.classList = 'card';
    face.classList = 'face';
    back.classList = 'back';

    // attach the info to the cards imgSrc data
    face.src = item.imgSrc;
    card.setAttribute('name', item.name);
    // attach the cards to the section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    
    card.addEventListener('click', (e) => {
      card.classList.toggle('toggleCard');
      checkCards (e);
    });
  });
};

// check if cards match
const checkCards = (e) => {
  console.log(e);
  const clickedCard = e.target;
  clickedCard.classList.add('flipped');
  const flippedCards = document.querySelectorAll('.flipped');
  const toggleCard = document.querySelectorAll('.toggleCard');
  //logic
  if (flippedCards.length === 2){
    if (flippedCards[0].getAttribute('name') ===
     flippedCards[1].getAttribute('name')){
      console.log('match');
      flippedCards.forEach((card) => {
        card.classList.remove('flipped');
        card.style.pointerEvents = 'none';
      });
    } else {
      console.log('wrong');
      flippedCards.forEach(card => {
        card.classList.remove('flipped');
        
        // delay card flip annimation for non matched cards
        setTimeout(() => card.classList.remove('toggleCard'), 1000);
      });
      playerLives --;
      playerLivesCount.textContent = playerLives
      if (playerLives === 0){
        section.style.pointerEvents = 'none'
        setTimeout(() => restart("LOSER"), 1000);
      }
    }
  }
// run a check to see if we won the game
  if (toggleCard.length === 16) {
    setTimeout(() => restart("Congrats 🏆"), 1000);
  }

};

// restart function
const restart = (text) => {
  let cardData = randomize()
  let faces = document.querySelectorAll('.face');
  let cards = document.querySelectorAll('.card');
  section.style.pointerEvents = 'none';
  cardData.forEach((item, index) => {
    cards[index].classList.remove('toggleCard');
    setTimeout(() => {
      // randomize
    cards[index].style.pointerEvents = 'all';
    faces[index].src = item.imgSrc;
    cards[index].setAttribute('name', item.name);
    section.style.pointerEvents = 'all';
    }, 1000)
  });
  playerLives = 10;
  playerLivesCount.textContent = playerLives;
  setTimeout (() => window.alert(text), 1000)
};

cardGenerator ();

const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const homeButton = document.getElementById('home-button');
const leaderboardButton = document.getElementById('leaderboard-button');

function showModal(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block'; // Show the modal
}

homeButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
    // Additional logic for home button
});

leaderboardButton.addEventListener('click', function() {
    modal.style.display = 'none'; // Hide the modal
    // Additional logic for leaderboard button
});
