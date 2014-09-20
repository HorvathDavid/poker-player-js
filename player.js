
function getMyCards(game_state) {
    return game_state.players[game_state.in_action].hole_cards;
}

function doRaise(game_state) {
    return doCall(game_state) + game_state.minimum_raise;
}

function doCheckOrFold(game_state) {
    return 0;
}

function doCall(game_state) {
    return  ( game_state.current_buy_in - getMyCurrentBet() );
}

function getMyCurrentBet(game_state) {
    return game_state.players[game_state.in_action].bet || 0;
}

function getCommunityCards(game_state) {
    return game_state.community_cards;
}

function rankCards(cards) {
    //ide irnak
    return 0;
}

function showdown(game_state) {

}


module.exports = {

    VERSION: "Pogacsa",

    bet_request: function (game_state) {
        var retval = 0;

        var rankedMyCards = getMyCards(getMyCards(game_state).concat(getCommunityCards(game_state)));
        var rankedOthersCards = getMyCards(getCommunityCards(game_state));

        if (rankedMyCards > rankedOthersCards) {
            retval = doRaise(game_state);
        } else {
            if (rankedMyCards === rankedOthersCards) {
                retval = doCall(game_state);
            } else {
                retval = doCheckOrFold(game_state);
            }
        }

        console.log(game_state);
        console.log(allcards);

        return retval;
    }
};
