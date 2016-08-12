(function() {
  angular
    .module('root')
    .factory('Poster', ['$http', Poster]);

  function Poster($http) {

    function search(film) {
      var img = document.getElementById('movie-poster');
      var output = 'http://image.tmdb.org/t/p/w500';

      var base = 'http://api.themoviedb.org/3';
      var service = '/search/movie';
      var apiKey = '75eb3f0904ccb7d88cdb1b78a29f23b3';
      var callback = 'JSON_CALLBACK'; // provided by angular.js
      var url = base + service + '?api_key=' + apiKey + '&query=' + film + '&callback=' + callback;

      $http.jsonp(url).then(function(data, status) {
        output += data.data.results[0].poster_path;
        img.src = output;
      }, function(data, status) {
        // var json = JSON.stringify(data);
        console.log("ERROR", json, status);
      });
    };

    return {
      search: search
    };
  }
})();
