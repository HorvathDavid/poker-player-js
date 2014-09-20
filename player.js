
module.exports = {

  VERSION: "Pogacsa",

  bet_request: function(game_state) {

    var retval = 0;

    var rankedMyCards = getMyCards(getMyCards(game_state).concat(getCommunityCards(game_state)));
    var rankedOthersCards = getMyCards(getCommunityCards(game_state));

    if (rankedMyCards > rankedOthersCards) {
      retval = doRaise(game_state);
    } else {
      if (rankedMyCards = rankedOthersCards) {
        retval = doCall(game_state);
      } else {
        retval = doCheckOrFold(game_state);
      }
    },

    console.log(game_state);
    console.log(allcards);

    return (retval);
  },

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
  },

  showdown: function(game_state) {

  }
};
