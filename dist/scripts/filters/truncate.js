(function() {
  angular
    .module('root')
    .filter('truncate', truncate);

  function truncate() {
    return function(string, limit) {
      var sub;
      if (limit === 'h') {
        limit = 50;
      } else if (limit === "p") {
        limit = 65;
      }
      
      if (string.length > limit) {
        sub = string.substring(0, limit) + '...';
      } else {
        sub = string;
      }
      return sub;
    };
  }
})();
