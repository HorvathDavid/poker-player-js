
var helper = require('./helper.js');
var rank = require('./rank.js');


module.exports = {

  VERSION: "Pogacsa",

  bet_request: function(game_state) {

    var retval = 0;

    var rankedMyCards = rank.rankCards(helper.getMyCards(game_state).concat(helper.getCommunityCards(game_state)));
    var rankedOthersCards = rank.rankCards(helper.getCommunityCards(game_state));

    if (rankedMyCards > rankedOthersCards) {
        console.log("XXX we raise");
      retval = helper.doRaise(game_state);
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

  /*Helper : {
    doRaise : function (game_state) {
      return doCall(game_state) + game_state.minimum_raise;
    },

    doCheckOrFold : function (game_state) {
      return 0;
    },

    doCall : function (game_state) {
      return  ( game_state.current_buy_in - getMyCurrentBet() );
    },

    getMyCurrentBet : function(game_state) {
      return game_state.players[game_state.in_action].bet || 0;
    },

    getMyCards : function(game_state) {
      return game_state.players[game_state.in_action].hole_cards;
    },

    getCommunityCards : function(game_state) {
      return game_state.community_cards;
    },

    rankCards : function(cards) {
        //ide irnak
        return 0;
    }
    
  },*/


  showdown: function(game_state) {

  }
};
