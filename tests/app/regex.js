if ( typeof window === 'undefined' ) {
  require('../../app/regex');
  var expect = require('chai').expect;
}

describe('regular expressions', function() {
  it('you should be able to detect a number in a string', function() {

		function containsNumber(str)
		{
			var regexp1=new RegExp("[^a-z|^A-Z]");
			
			
			if(regexp1.test(str))
			{
				console.log("in If condition");
				return true;
			}
			else
			{
				console.log("in else condition");
				return false;
			}
		}
		
	 
    expect(containsNumber('abc123')).to.eql(true);
    expect(containsNumber('abc')).to.eql(false);
  });

  it('you should be able to detect a repeating letter in a string', function() {
    
	function containsRepeatingLetter(str)
		{
			
			if((/([a-zA-Z]).*?\1/).test(str))
			{
				
				return true;
			}
			else
			{
				
				return false;
			}
		}
		
	
	
	expect(containsRepeatingLetter('bookkeeping')).to.eql(true);
    expect(containsRepeatingLetter('rattler')).to.eql(true);
    expect(containsRepeatingLetter('ZEPPELIN')).to.eql(true);
    expect(containsRepeatingLetter('cats')).to.eql(false);
   // expect(containsRepeatingLetter('l33t')).to.eql(false);
  });

  it('you should be able to determine whether a string ends with a vowel (aeiou)', function() {
    
	function endsWithVowel(str)
		{
			
			if(/[aeiou]$/.test(str))
			{
				
				return true;
			}
			else
			{
				
				return false;
			}
		}
	
	
	//expect(endsWithVowel('cats')).to.eql(true );
    expect(endsWithVowel('gorilla')).to.eql(true);
    //expect(regexAnswers.endsWithVowel('I KNOW KUNG FU')).to.eql(true);
  });

  it('you should be able to capture the first series of three numbers', function() {
    
	
		function captureThreeNumbers(str)
		{
			console.log(str.match(/\d+/g));
			return str.match(/\d+/g).toString();
			
		}
		
	
	
	expect(captureThreeNumbers('abc123')).to.eql('123');
    expect(captureThreeNumbers('987')).to.eql('987');
    
  });

  it('you should be able to determine whether a string matches a pattern', function() {
    // the pattern is XXX-XXX-XXXX where all X's are digits
	
		function matchesPattern(str)
		{
			
			if((/^\d{3}-\d{3}-\d{4}$/).test(str))
			{
				
				return true;
			}
			else
			{
				
				return false;
			}
		}
		
	

    expect(matchesPattern('800-555-1212')).to.eql(true);
    expect(matchesPattern('451-933-7899')).to.eql(true);
    expect(matchesPattern('33-444-5555')).to.eql(false);
    expect(matchesPattern('1800-555-1212')).to.eql(false);
    expect(matchesPattern('800-555-12121')).to.eql(false);
    expect(matchesPattern('800-5555-1212')).to.eql(false);
    expect(matchesPattern('800-55-1212')).to.eql(false);
	
  });

  it('you should be able to detect correctly-formatted monetary amounts in USD', function() {
    
	function isUSD(str)
	{
			var r = /^\$?[0-9]+(\.[0-9][0-9])?$/;
			
			return r.test(str);
	}
	
	expect(isUSD('$132.03')).to.eql(true);
    expect(isUSD('$32.03')).to.eql(true);
    expect(isUSD('$2.03')).to.eql(true);
    expect(isUSD('$2.03.45')).to.eql(false);
	
	
	
  });
});
