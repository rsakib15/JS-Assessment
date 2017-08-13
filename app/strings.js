exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var uniqueString = "";
    for(var i = 0; i < str.length; i++){
      if(str.lastIndexOf(str[amount]) == str.indexOf(str[amount])){
        uniqueString += str[i];
      }
    }
    console.log(uniqueString);
    return uniqueString;
  },

  wordWrap: function(str, cols) {
	  
		
  },

  reverseString: function(str) {
return str.split("").reverse().join("");
  }
};
