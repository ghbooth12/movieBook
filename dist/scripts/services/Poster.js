(function() {
  angular
    .module('root')
    .factory('Poster', ['$http', 'Genre', Poster]);

  function Poster($http, Genre) {
    var poster = {};
    var base = 'http://api.themoviedb.org/3';
    var service = '/search/movie';
    var apiKey = '75eb3f0904ccb7d88cdb1b78a29f23b3';
    var callback = 'JSON_CALLBACK'; // provided by angular.js

    poster.search = function(movieInfo) {
      var title = movieInfo.title;
      var img = document.getElementById('movie-poster');
      var errMsg = document.getElementById('err-msg');
      var output = 'http://image.tmdb.org/t/p/w500';

      var url = base + service + '?api_key=' + apiKey + '&query=' + title + '&callback=' + callback;

      $http.jsonp(url).then(function(data, status) {
        // console.log(JSON.stringify(data));
        if (data.data.total_results === 0) {
          errMsg.style.display = "block";
        } else {
          var result = data.data.results[0];
          errMsg.style.display = "none";
          output += result.poster_path;
          img.src = output;
          img.alt = result.title;

          // fill in automatically
          movieInfo.title = result.title;
          movieInfo.genre = Genre.numToTxt(result.genre_ids);
        }
      }, function(data, status) {
        var json = JSON.stringify(data);
        console.log("ERROR", json, status);
      });
    }

    return poster;
  }
})();
