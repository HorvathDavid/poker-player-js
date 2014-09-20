
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {

    return (game_state.current_buy_in-players.in_action.bet);
  },

  showdown: function(game_state) {

  }
};
