
//WRITTEN WITH PROMISE
// const newDeckUrl = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'

// // function getaDeck(){
// //     axios
// //         .get(newDeckUrl)
// //         .then(res => {
// //             console.log(res);
// //             let deckId = res.data.deck_id;
// //             const drawCardUrl = `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`
// //             return axios.get(drawCardUrl)
// //         })
// //         .then(card => {
// //             console.log(card.data.cards[0].value,'of', card.data.cards[0].suit)
// //             console.log(card.data.cards[1].value,'of', card.data.cards[1].suit)
// //         })
// // }

// $(function() {
//     let baseURL = 'https://deckofcardsapi.com/api/deck';
  
//     // 1.
//     $.getJSON(`${baseURL}/new/draw/`).then(data => {
//       let { suit, value } = data.cards[0];
//       console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`);
//     });
  
//     // 2.
//     let firstCard = null;
//     $.getJSON(`${baseURL}/new/draw/`)
//       .then(data => {
//         firstCard = data.cards[0];
//         let deckId = data.deck_id;
//         return $.getJSON(`${baseURL}/${deckId}/draw/`);
//       })
//       .then(data => {
//         let secondCard = data.cards[0];
//         [firstCard, secondCard].forEach(function(card) {
//           console.log(
//             `${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`
//           );
//         });
//       });
  
//     // 3.
//     let deckId = null;
//     let $btn = $('button');
//     let $cardArea = $('#card-area');
  
//     $.getJSON(`${baseURL}/new/shuffle/`).then(data => {
//       deckId = data.deck_id;
//       $btn.show();
//     });
  
//     $btn.on('click', function() {
//       $.getJSON(`${baseURL}/${deckId}/draw/`).then(data => {
//         let cardSrc = data.cards[0].image;
//         let angle = Math.random() * 90 - 45;
//         let randomX = Math.random() * 40 - 20;
//         let randomY = Math.random() * 40 - 20;
//         $cardArea.append(
//           $('<img>', {
//             src: cardSrc,
//             css: {
//               transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
//             }
//           })
//         );
//         if (data.remaining === 0) $btn.remove();
//       });
//     });
//   });

//WRITTEN WITH ASYNC/AWAIT
const btn = document.querySelector('button');

async function newDeck(){
  res = await axios.get("https://deckofcardsapi.com/api/deck/new/")
  deckId = res.data.deck_id;
  shuffle(deckId);
  return deckId
}
async function shuffle(id){
  res = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/shuffle/`);
  console.log(res)
}
async function drawCard(id){
  let res = await axios.get(`https://deckofcardsapi.com/api/deck/${id}/draw/?count=1`)
  console.log(res.data);
  appendCard(res.data.cards[0].image)
  if(res.data.remaining === 0){
    btn.remove()
  }
}

let deckId = newDeck()
btn.addEventListener('click', evt => {
  evt.preventDefault()
  
  drawCard(deckId)
})

function appendCard(card){
  const cardArea = document.querySelector('div');
  let img = document.createElement('img');
  img.src = card;

  cardArea.append(img)

}