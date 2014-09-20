var _ = require('lodash/dist/lodash.underscore');
module.exports = {
    rankCards: function (cards) {

		var retval = 0;    	
    	
    	var foundPairRank = this.findPair(cards);
    	if (typeof foundPairRank !== "undefined")
    	{
    		if (this.isGreaterRank(foundPairRank, "8"))
    		{
    			retval = 1;
    		}
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

    	var rankOrder = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    	var indexOfRank = rankOrder.indexOf(rank);
    	var indexOfIsGreaterThanRank = rankOrder.indexOf(isGreaterthanRank);

    	isGreater = (indexOfRank > indexOfIsGreaterThanRank);

    	return isGreater;
    }

    /*countCards : function (cards) {
    	return cards.length;
    }*/
};