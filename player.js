
module.exports = {

  VERSION: "Default JavaScript folding player",

  bet_request: function(game_state) {
  	console.log(game_state);

var bet = game_state.players[game_state.in_action].bet || 0;

    return (game_state.current_buy_in - bet);
  },

  showdown: function(game_state) {

  }
};
