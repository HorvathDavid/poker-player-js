module.exports = {
	doRaise : function (game_state) {
      return this.doCall(game_state) + game_state.minimum_raise;
    },

    doCheckOrFold : function (game_state) {
      return 0;
    },

    doCall : function (game_state) {
      return  ( game_state.current_buy_in - this.getMyCurrentBet() );
    },

    getMyCurrentBet : function(game_state) {
      return game_state.players[game_state.in_action].bet || 0;
    },

    getMyCards : function(game_state) {
      return game_state.players[game_state.in_action].hole_cards;
    },

    getCommunityCards : function(game_state) {
      return game_state.community_cards;
    }
}