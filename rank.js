module.exports = {
    rankCards: function (cards) {

		var retval = 0;    	
    	
		if (cards.length >= 2) {

		    var foundPairRank = this.findOfSameRank(cards);
		    if (typeof foundPairRank !== "undefined") {
		        if (this.isGreaterRank(foundPairRank, "8")) {
		            retval = 2;
		        }
		    }
		    else {
		        var highestCard = this.getHighestCardRank(cards);
		        if (this.isGreaterRank(highestCard, "10")) {
		            retval = 1;
		        }

		    }
		}

        return retval;
    },

    getHighestCardRank : function(cards)
    {
        var highestCardRank = cards[0].rank;

        for (i = 1; i < cards.length; i++)
        {
            if (cards[i].rank > highestCardRank)
            {
                highestCardRank = cards[i].rank;
            }
        }

        return highestCardRank;
    },

    findOfSameRank : function (cards) {

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
};