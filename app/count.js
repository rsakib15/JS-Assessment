exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var Timer = function(start,end){
	var timeout;
	var that = this;
	this.startCount = function() {
		console.log(start);
		timeout = setTimeout(function() {
			if(start < end) {
				start++;
				return that.startCount(start, end);
			}
			else {
				clearTimeout(timeout);
			}
		},100);

}
	
	this.stopCount = function(){
		self.cancel();
	}

}
	var timer = new Timer(start,end);
	timer.startCount();

  }
};
