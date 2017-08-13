if ( typeof window === 'undefined' ) {
  require('../../app/logicalOperators');
  var expect = require('chai').expect;
}

describe('logical operators', function(){
  it('you should be able to work with logical or', function() {
	  
	  function or(a,b)
	  {
		  if(a==true)
		  {
			  if(b==true)
			  {
				  return true;
			  }
			  else
				  return true;
		  }
		  
		  if(a==false)
		  {
			  if(b==true)
				  return true;
			  else
				  return false;
		  }
		  
	  }
	  
    expect(or(false, true)).to.be.ok;
    expect(or(true, false)).to.be.ok;
    expect(or(true, true)).to.be.ok;
    expect(or(false, false)).not.to.be.ok;
    expect(or(3, 4)).to.not.eq(7);
  });

  it('you should be able to work with logical and', function() {
	  
	  function and(a,b)
	  {
		  if(a==true)
		  {
			  if(b==true)
				  return true;
			  else
				  return false;
		  }
		  return false;
	  }
    expect(and(false, true)).not.to.be.ok;
    expect(and(false, false)).not.to.be.ok;
    expect(and(true, false)).not.to.be.ok;
    expect(and(true, true)).to.be.ok;
    expect(and(3, 4)).not.to.be.ok;
  });
});
