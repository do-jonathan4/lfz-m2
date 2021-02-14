console.log('Lodash is loaded:', typeof _ !== 'undefined');
const players = [
  { name: 'Emiya', hand: [], score: 0 },
  { name: 'Saber', hand: [], score: 0 },
  { name: 'Rin', hand: [], score: 0 },
  { name: 'Archer', hand: [], score: 0 }
];

const rank = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'Jack', 'Queen', 'King', 'Ace'];
const suit = ['clubs', 'diamonds', 'hearts', 'spades'];
const deck = [];

for (let i = 0; i < rank.length; i++) {
  for (let j = 0; j < suit.length; j++) {
    const card = {
      suit: suit[j],
      rank: rank[i]
    };
    deck.push(card);
  }
}

for (let i = deck.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i);
  const temp = deck[i];
  deck[i] = deck[j];
  deck[j] = temp;
}

function deal(deck, players, numCards) {
  for (let i = 0; i < players.length; i++) {
    players[i].hand.push(deck.splice(0, numCards)[0]);
  }
}

function getScore(players) {
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].rank === 'King' ||
        players[i].hand[j].rank === 'Queen' ||
        players[i].hand[j].rank === 'Jack'
      ) {
        players[i].score += 10;
      } else if (players[i].hand[j].rank === 'Ace') {
        players[i].score += 11;
      } else {
        players[i].score += players[i].hand[j].rank;
      }
    }
  }
  getWinner(players);
}

function getWinner(players) {
  players.sort((a, b) => b.score - a.score);
  console.log(`Winner: ${players[0].name}, Score: ${players[0].score}`);
}

deal(deck, players, 2);
getScore(players);
console.log(players);
