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
// ===== Part 2: Shuffle and Deal =====

function shuffleDeck(): void {
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

function dealCards(amount: number): string[] {
  let hand: string[] = [];
  for (let i = 0; i < amount; i++) {
    hand.push(deck.pop() as string);
  }
  return hand;
}
