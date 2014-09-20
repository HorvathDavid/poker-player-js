var helper = require('./helper.js');

module.exports = {
    rankCards: function (cards) {

		var retval = 0;    	
    	
		if (cards.length >= 2) {

		    var foundPairRank = this.findPair(cards);
		    if (foundPairRank.length > 0)
		    {
		        var pairsFound = 0;
		        var threeFound = false;
		        var fourFound = false;
		        for(i=0; i<foundPairRank.length; i++)
		        {
		            if (foundPairRank[i].found > 3)
		            {
		                fourFound = true;
		            }
		            else if (foundPairRank[i].found > 2)
		            {
		                threeFound = true;
		            }
		            else
		            {
		                pairsFound++;
		            }
		        }

		        if (pairsFound == 1)
		        {
		            if (threeFound)
		            {
		                retval = 7;
		            }
		            else
		            {
		                retval = 2;
		            }
		        }
		        else if (pairsFound == 2)
		        {
		            retval = 3;
		        }
                else
		        {
		            if (threeFound)
		            {
		                retval = 4;
		            }
		            else if (fourFound)
		            {
		                retval = 8;
		            }
		        }
		    }
		    else {
		        var highestCard = this.getHighestCardRank(cards);
		        if (helper.isGreaterRank(highestCard, "10")) {
		            retval = 1;
		        }

		    }
		}

		console.log("--- rank");
		console.log(cards);
		console.log(retval);
		console.log("---");

		return retval;
    },

    findStraight : function(cards)
    {
        var highestCardOfStraight;

        var rankOrder = helper.getRankOrder();
        for (k = rankOrder.length; k >= 4; k--)
        {
            var currentHighestCard = rankOrder[k];
            for(j=k; j>=k-5;j--)
            {
                var currentCardToFound = rankOrder[j];

                var found = false;
                for(i=0; i<cards.length; i++)
                {
                    if (cards[i].rank == rankOrder[j])
                    {
                        found = true;
                        break;
                    }
                }

                if (!found)
                {
                    break;
                }
            }

            if (typeof highestCardOfStraight !== "undefined")
            {
                break;
            }
        }

        return highestCardOfStraight;
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

    findPair : function (cards) {

        var foundPairRank = [];

    	var rankOrder = helper.getRankOrder();
    	for (k = rankOrder.length; k >= 0; k--)
    	{
    	    var found = 0;
    	    for(i=0; i<cards.length; i++)
    	    {
    	        if (cards[i].rank == rankOrder[k])
    	        {
    	            found++;
    	        }
    	    }

    	    if (found>=2)
    	    {
    	        foundPairRank = foundPairRank.concat({ "rank":rankOrder[k], "found":found});
    	    }
    	}

		return foundPairRank;
    }
};