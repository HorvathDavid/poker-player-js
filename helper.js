module.exports = {
	doRaise : function (game_state) {
      return this.doCall(game_state) + game_state.minimum_raise;
    },

    doCheckOrFold : function (game_state) {
      return 0;
    },

    doCall : function (game_state) {
      return  ( game_state.current_buy_in - this.getMyCurrentBet(game_state) );
    },

    doAllIn : function (game_state) {
        return game_state.players[game_state.in_action].stack;
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


    getRankOrder: function () {
        return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    },

    isGreaterRank: function (rank, isGreaterthanRank) {

        var isGreater = false;

        var rankOrder = this.getRankOrder();
        var indexOfRank = rankOrder.indexOf(rank);
        var indexOfIsGreaterThanRank = rankOrder.indexOf(isGreaterthanRank);

        isGreater = (indexOfRank > indexOfIsGreaterThanRank);

        return isGreater;
    }

}