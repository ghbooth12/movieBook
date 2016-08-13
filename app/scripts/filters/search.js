(function() {
  angular
    .module('root')
    .filter('search', ['Movie', search]);

  function search(Movie) {
    return function(arr, searchWord) {
      if (!searchWord) {
        return arr;
      }
      var result = [];
      searchWord = searchWord.toLowerCase();
      angular.forEach(arr, function(item) {
        if (item.title.toLowerCase().indexOf(searchWord) !== -1) {
          result.push(item);
        }
      });
      return result;
    };
  }
})();
