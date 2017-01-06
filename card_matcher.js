
var cardMatcher = {};

cardMatcher.columnMin = 2;
cardMatcher.columnMax = 6;
cardMatcher.cards = []

cardMatcher.model = {
  columnCount: 0,
  cardCount: 0,
  cards: cardMatcher.cards,

  setColumnCount: function(columnCountInput) {
    var inputInt = parseInt(columnCountInput);
    if (inputInt % 2 !== 0 || inputInt < cardMatcher.columnMin || inputInt > cardMatcher.columnMax) {
      alert("Please enter an even number between " + String(cardMatcher.columnMin) + " and " + String(cardMatcher.columnMax) + ".");
    } else {
      this.columnCount = inputInt;
      this.cardCount = Math.pow(inputInt, 2);
    };
  },

  getColumnClass: function() {
    return "thumbnail col-xs-" + String(12 / this.columnCount);
  },

  createColumn: function() {
    var image = '<img src="card-back.jpg">';
    var $div = $("<div>").addClass(this.getColumnClass()).html(image);
    return $div;
  },

  generateCards: function() {
    var i = this.cardCount / 2;
    while (i--) {
      this.cards.push(String(i));
      this.cards.push(String(i));
    }
    this.shuffleCards();
  },

  shuffleCards: function() {
    for (var i = this.cards.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [this.cards[i - 1], this.cards[j]] = [this.cards[j], this.cards[i - 1]];
    }
  }

};

cardMatcher.view = {
  init: function() {
  },

  getColumnCount: function() {
    return window.prompt("Type in an even number of columns to play with, between " + cardMatcher.columnMin + " and " + cardMatcher.columnMax + ".", cardMatcher.columnMin);
  },

  setCardDivs: function(column, cardCount) {
    var $containingRow = $(".row");
    var i = cardCount
    while (i--) {
      $containingRow.append(column.clone());
    };
  },

  setCardIds: function() {

  }

};

cardMatcher.controller = {
  init: function() {
    this.checkColumnCount();
    this.getAndSetColumns();
    cardMatcher.model.generateCards();
  },

  checkColumnCount: function() {
    while (!cardMatcher.model.columnCount) {
      cardMatcher.model.setColumnCount(cardMatcher.view.getColumnCount());
    }
  },

  getAndSetColumns: function() {
    var column = cardMatcher.model.createColumn();
    var cardCount = cardMatcher.model.cardCount
    cardMatcher.view.setCardDivs(column, cardCount);
  }
};

$(document).ready(function() {
  cardMatcher.controller.init();
});
