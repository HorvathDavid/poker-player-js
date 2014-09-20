
module.exports = {

  VERSION: "Pogacsa",

  bet_request: function(game_state) {
  	console.log(game_state);
  	console.log(game_state.players[game_state.in_action].hole_cards);
  	console.log(game_state.community_cards);

  	var mycard = game_state.players[game_state.in_action].hole_cards;

    var allcards = mycard.concat(game_state.community_cards);

  	console.log(allcards);

	var bet = game_state.players[game_state.in_action].bet || 0;

    return (game_state.current_buy_in - bet);
  },

  showdown: function(game_state) {

  }
};
