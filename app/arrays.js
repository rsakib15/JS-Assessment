exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {

  },

  sum: function(arr) {

  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {
	var i,
	arrLength = arr.length;
    
    for (i = 0; i < arrLength; i += 1) {
		if (arr[i] === item) {
			arr.splice(i, 1);
			i = i - 1;
      }
    }
    return arr;

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
