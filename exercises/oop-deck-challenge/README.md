# oop-deck-challenge

Using Object Oriented JavaScript to to model a 52-card Deck.

### Before You Begin

Be sure to check out a new branch (from `master`) for this exercise. Detailed instructions can be found [**here**](../../guides/before-each-exercise.md). Then navigate to the `exercises/oop-deck-challenge` directory in your terminal.

### Challenge

Use Object Oriented JavaScript to model a 52-card `Deck` that can create and distribute cards.  If you are unsure how a standard 52 deck of cards is setup, here is some [information](https://en.wikipedia.org/wiki/Standard_52-card_deck).

All challenges done in oop may be accomplished in different ways.  The following are how we expect your application to be layed out, but of course your end solution may differ.  Be sure to question the differences in the solution provided after this challenge is given to you.

###  Layout
___

**`deck.js`**

  Implement the `Deck` class: a class responsible for storing your cards, shuffling cards, and drawing cards from the deck.

  #### Methods:

  1. `constructor()`

      - Stores a standard 52 deck of cards in an array.

  1. `shuffle()`

      - Shuffles the cards in random order.

  1. `draw(numberOfCards)`

      - Removes cards from the array relative to the `numberOfCards` parameter.
      - Returns the cards removed from the array.

### Example List

  - [Instantiating a `Deck`](#instantiating-a-deck)
  - [Shuffling a `Deck`](#shuffling-a-deck)
  - [Drawing cards from a `Deck`](#drawing-cards-from-a-deck)

## Examples

### Instantiating a `Deck`

```js
var deck = new Deck()
/*
Returns the following object
{
  cards: [
    {
      suit: 'club',
      rank: 'Ace'
    },
    {
      suit: 'club',
      rank: '2'
    },
    ... Rest of the cards with all suits and ranks
  ]
}
*/
```

### Shuffling a `Deck`

```js
var deck = new Deck()
deck.shuffle()
console.log(deck.cards)
/*
The cards property should now contain a shuffled array of objects
*/
```

### Drawing cards from a `Deck`

```js
var deck = new Deck()
var hand1 = deck.draw(1)

/*
returns [
  {
    suit: 'club', // suit may be different based on your implementation
    rank: 'Ace' // rank may be different based on your implementation
  }
]
*/

console.log(deck.cards.length) // 51

var hand2 = deck.draw(2)

/*
returns [
  {
    suit: 'club', // suit may be different based on your implementation
    rank: '2' // rank may be different based on your implementation
  },
    {
    suit: 'club', // suit may be different based on your implementation
    rank: '3' // rank may be different based on your implementation
  }
]
*/

console.log(deck.cards.length) // 49

```

___
### References

- [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [Math.floor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)


### Submitting Your Solution

When your solution is complete, return to the root of your `lfz-lessons` directory. Then commit your changes, push, and submit a Pull Request on GitHub. Detailed instructions can be found [**here**](../../guides/after-each-exercise.md).
