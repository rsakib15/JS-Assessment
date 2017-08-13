if ( typeof window === 'undefined' ) {
  require('../../app/strings');
  var expect = require('chai').expect;
}

describe('strings', function() {
  it('you should be able to reduce duplicate characters to a desired minimum', function() {
    
	function reduceString(str) {
  var result = '';
  for(var i = 0; i < str.length; i++) {
    if(result.indexOf(str[i]) < 0) {
      result += str[i];
    }
  }
  console.log(result);
  return result;
}

	
  	expect(reduceString('aaaabbbb')).to.eql('ab');
    expect(reduceString('xaaabbbb')).to.eql('xab');
    expect(reduceString('aaaabbbb')).to.eql('ab');
   
  });

  it('you should be able to wrap lines at a given number of columns, without breaking words', function() {
    var wrapCol = 5;
    var inputStrings = [
      'abcdef abcde abc def',
      'abc abc abc',
      'a b c def'
    ];
    var outputStrings = [
      'abcdef\nabcde\nabc\ndef',
      'abc\nabc\nabc',
      'a b c\ndef'
    ];
    var formattedStr;
	


    inputStrings.forEach(function(str, index) {
      formattedStr = stringsAnswers.wordWrap(str, wrapCol);
      expect(formattedStr).to.eql(outputStrings[index]);
    });
  });

  it('you should be able to reverse a string', function() {
    var inputStrings = [
      'abc',
      'i am a string of characters',
      'A man, a plan, a canal: Panama'
    ];
    var outputStrings = [
      'cba',
      'sretcarahc fo gnirts a ma i',
      'amanaP :lanac a ,nalp a ,nam A'
    ];

    inputStrings.forEach(function(str, index) {
		
		//console.log(str);
      var result = str.split("").reverse().join("");
      
	  //console.log(result);
	  
	  expect(result).to.eql(outputStrings[index]);
    
	});
  });
});
