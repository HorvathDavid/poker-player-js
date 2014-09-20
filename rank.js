var _ = require('lodash/dist/lodash.underscore');
module.exports = {
    rankCards: function (cards) {

		var retval = 0;    	
    	var pairFound = false;


    	for (i = 0; i < cards.length-1; i++) { 

    		for(j = i+1; j < cards.length; j++) {
    			if (cards[i].rank = cards[j].rank) {
    				pairFound = true;
    				break;
    			}
    		}	
		}

		if (pairFound) {
			retval = 1;
		}

        return retval;
    }

    /*countCards : function (cards) {
    	return cards.length;
    }*/
};