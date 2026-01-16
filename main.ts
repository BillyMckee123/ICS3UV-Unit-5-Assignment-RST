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
// ===== Part 3: Hand Evaluation =====
function getHandRank(cards: string[]): number {
  let counts: number[] = [];

  for (let value of values) {
    let count = 0;
    for (let card of cards) {
      if (card.startsWith(value)) {
        count++;
      }
    }
    counts.push(count);
  }

  if (counts.includes(3)) {
    return 3; // Three of a kind
  } else if (counts.includes(2)) {
    return 2; // Pair
  } else {
    return 1; // High card
  }
}

function determineWinner(playerCards: string[], dealerCards: string[]): string {
  let playerRank = getHandRank(playerCards);
  let dealerRank = getHandRank(dealerCards);

  if (playerRank > dealerRank) {
    return "Player wins!";
  } else if (dealerRank > playerRank) {
    return "Dealer wins!";
  } else {
    return "It's a tie!";
  }
}
// ===== Part 4: Main Program =====
let playAgain = "yes";

while (playAgain === "yes") {
  console.log("\nWelcome to Simplified Texas Hold'em Poker!");

  // Reset deck
  deck = [];
  createDeck();
  shuffleDeck();

  let playerHand = dealCards(2);
  let dealerHand = dealCards(2);
  let communityCards = dealCards(5);

  let playerCards = playerHand.concat(communityCards);
  let dealerCards = dealerHand.concat(communityCards);

  console.log("\nYour hand:");
  console.log(playerHand.join(", "));

  console.log("\nDealer's hand:");
  console.log(dealerHand.join(", "));

  console.log("\nCommunity cards:");
  console.log(communityCards.join(", "));

  console.log("\nResult:");
  console.log(determineWinner(playerCards, dealerCards));

  // Ask user if they want to play again
  playAgain = prompt("\nDo you want to play again? (yes or no)")?.toLowerCase() || "no";
}

console.log("\nThanks for playing!");

