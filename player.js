
var helper = require('./helper.js');
var rank = require('./rank.js');


module.exports = {

  VERSION: "Pogacsa",

  bet_request: function(game_state) {

    var retval = 0;

    console.log(game_state);

    var rankedOnlyMyCards = rank.rankCards(helper.getMyCards(game_state));
    var rankedMyCards = rank.rankCards(helper.getMyCards(game_state).concat(helper.getCommunityCards(game_state)));
    var rankedOthersCards = rank.rankCards(helper.getCommunityCards(game_state));

    if (rankedMyCards > rankedOthersCards) {
        if (rankedMyCards > 7) {
            retval = helper.doAllIn(game_state);
            console.log("XXX we all in: " + retval);
        }
        else {
            var potRate = game_state.pot / parseFloat(game_state.minimum_raise);
            console.log("potrate: " + potRate);

            var amount = game_state.minimum_raise;
            if (rankedMyCards > 2) {
                amount = Math.max(helper.getOurStack(game_state) / 2, amount);
            }
            retval = helper.doRaise(game_state, amount);
            console.log("XXX we raise: " + retval);
        }
    } else {
        if (rankedOnlyMyCards < rankedOthersCards) {
            retval = helper.doCheckOrFold(game_state);
            console.log("XXX we check or fold: " + retval);
        }
        else {
            retval = helper.doCall(game_state);
            console.log("XXX we call: " + retval);
        }
    }


    return (retval);
  },

  showdown: function(game_state) {

  }
};
