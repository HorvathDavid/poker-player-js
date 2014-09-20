
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
  	console.log(game_state.players);
    return (game_state.current_buy_in - game_state.players[game_state.in_action].bet);
  },

  showdown: function(game_state) {

  }
};
