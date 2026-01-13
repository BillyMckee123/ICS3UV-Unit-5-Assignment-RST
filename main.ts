// ===== Part 1: Card and Deck Setup =====

const suits: string[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values: string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck: string[] = [];

function createDeck(): void {
  for (let suit of suits) {
    for (let value of values) {
      deck.push(value + " of " + suit);
    }
  }
}