
var helper = require('./helper.js');
var rank = require('./rank.js');


module.exports = {

  VERSION: "Pogacsa",

  bet_request: function(game_state) {

    var retval = 0;

    var rankedMyCards = rank.rankCards(helper.getMyCards(game_state).concat(helper.getCommunityCards(game_state)));
    var rankedOthersCards = rank.rankCards(helper.getCommunityCards(game_state));

    if (rankedMyCards > rankedOthersCards) {
        if (rankedMyCards >= 2) {
            console.log("XXX we all in");
            retval = helper.doAllIn(game_state);
        }
        else {
            console.log("XXX we raise");
            retval = helper.doRaise(game_state);
        }
    } else {
      if (rankedMyCards = rankedOthersCards) {
          console.log("XXX we call");
          retval = helper.doCall(game_state);
      } else {
          console.log("XXX we check or fold");
          retval = helper.doCheckOrFold(game_state);
      }
    }

    console.log(game_state);

    return (retval);
  },

  showdown: function(game_state) {

  }
};
