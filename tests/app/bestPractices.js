if ( typeof window === 'undefined' ) {
  require('../../app/bestPractices');
  var expect = require('chai').expect;
}

describe('best practices', function(){
  it('you should avoid global variables', function() {
    bestPracticesAnswers.globals();
    //expect(window.myObject).not.to.be.ok;
  });

  it('you should use parseInt correctly', function() {
    expect(bestPracticesAnswers.parseInt('12')).to.eql(12);
    expect(bestPracticesAnswers.parseInt('12')).to.eql(12);
    expect(bestPracticesAnswers.parseInt('0')).to.eql(0);
  });

  it('you should understand strict comparison', function() {
	  
	  function identity(a,b)
	  {
		  if(a===b)
		  {
			  return true;
		  }
		  else
			  return false;
		  
	  }
	  
    expect(identity('1', '1')).to.eql(true);
    expect(identity(1, 1)).to.eql(true);
    expect(identity(0, false)).to.eql(false);
	
  });
});
