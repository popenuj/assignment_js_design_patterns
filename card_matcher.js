
var cardMatcher = {};

cardMatcher.cardMin = 4;
cardMatcher.cardMax = 60;

cardMatcher.model = {
  cardCount: 0,

  setCardCount: function(cardCountInput) {
    var inputInt = parseInt(cardCountInput);
    if (inputInt % 2 !== 0 || inputInt < cardMatcher.cardMin || inputInt > cardMatcher.cardMax) {
      alert("Please enter an even number between 4 and 60.")
    } else {
      this.cardCount = inputInt;
    }
  }
}

cardMatcher.view = {
  init: function() {
  },

  getCardCount: function() {
    return window.prompt("Type in an even number of cards to play with, between " + String(cardMatcher.cardMin) + " and " + String(cardMatcher.cardMax) + ".", String(cardMatcher.cardMin));
  }
}

cardMatcher.controller = {
  init: function() {
    this.checkCardCount();
  },

  checkCardCount: function() {
    while (!cardMatcher.model.cardCount) {
      cardMatcher.model.setCardCount(cardMatcher.view.getCardCount());
    }
  }
}

cardMatcher.controller.init();
