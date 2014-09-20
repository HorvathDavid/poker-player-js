var _ = require('lodash/dist/lodash.underscore');
module.exports = {
    rankCards: function (cards) {

		var retval = 0;    	
    	
    	var foundPairRank = this.findPair(cards);

		if (foundPairRank >) {
			retval = 1;
		}

        return retval;
    },

    findPair : function (cards) {

    	var foundPairRank;


    	for (i = 0; i < cards.length-1; i++) { 

    		for(j = i+1; j < cards.length; j++) {
    			if (cards[i].rank = cards[j].rank) {
    				foundPairRank = cards[i].rank;
    				break;
    			}
    		}	
		}

		return foundPairRank;
    },

    isGreaterRank : function(rank, isGreaterthanRank) {
    	var isGreater = false;

    	return isGreater;
    }

    /*countCards : function (cards) {
    	return cards.length;
    }*/
};