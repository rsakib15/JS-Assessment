exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
	return $.Deferred(function(deferred){
          setTimeout(function(){
                deferred.resolve(value);
            },100);
    }).promise();
  },

  manipulateRemoteData: function(url) {
	return $.Deferred(function(deferred) {
		$.getJSON(url, function(data) {
		var people = [];
			for (var i=0; i<data.people.length; i++) {
				people.push(data.people[i].name);
			}
	deferred.resolve(people.sort());
	});
	}).promise();
  }

};
