(function() {
  angular
    .module('root')
    .directive('poster', ['$http', poster]);

  function poster($http) {
    return {
      templateUrl: 'templates/directives/poster.html',
      replace: true,
      restrict: 'E',
      scope: {},
      link: function(scope, element, attrs) {
        var json;

        function extractImg(json) {
          var output;

          if (json.results[0].poster_path) {
            output = 'http://image.tmdb.org/t/p/w500' + json.results[0].poster_path;
          } else {
            output = false;
          }

          return output;
        }

        scope.search = function(film) {
          var base = 'http://api.themoviedb.org/3';
          var service = '/search/movie';
          var apiKey = '75eb3f0904ccb7d88cdb1b78a29f23b3';
          var callback = 'JSON_CALLBACK'; // provided by angular.js
          var url = base + service + '?api_key=' + apiKey + '&query=' + film + '&callback=' + callback;

          $http.jsonp(url).then(function(data, status) {
            json = JSON.stringify(data);
            console.log("SUCCESS", json, status);
            scope.src = extractImg(json);
          }, function(data, status) {
            json = JSON.stringify(data);
            console.log("ERROR", json, status);
          });
        };

      } // end link
    }; // end return
  } // end poster
})();
