(function() {
  angular
    .module('root')
    .factory('Poster', ['$http', 'Genre', Poster]);

  function Poster($http, Genre) {
    var poster = {};

    function fillForm(info, result) {
      var img = document.getElementById('movie-poster');
      var output = 'http://image.tmdb.org/t/p/w500';

      img.src = output + result.poster_path;
      img.alt = result.title;

      // fill in automatically
      info.title = result.title;
      info.genre = Genre.numToTxt(result.genre_ids);
    }

    poster.search = function(movieInfo) {
      var group = document.getElementById('result-group');

      // create url
      var base = 'http://api.themoviedb.org/3';
      var service = '/search/movie';
      var apiKey = '75eb3f0904ccb7d88cdb1b78a29f23b3';
      var title = movieInfo.title;
      var callback = 'JSON_CALLBACK'; // provided by angular.js
      var url = base + service + '?api_key=' + apiKey + '&query=' + title + '&callback=' + callback;

      // remove Search Result
      while (group.hasChildNodes()) {
        group.removeChild(group.firstChild);
      }

      // Get Movie Poster From TMDB API
      $http.jsonp(url).then(function(data, status) {
        // console.log(JSON.stringify(data));
        var errMsg = document.getElementById('err-msg');
        var results = data.data.results;
        var length = results.length;

        if (results.length === 0) {  // movie not found
          errMsg.style.display = "block";
          movieInfo.errForMany = false;
        } else {  // one or more movies found
          var output = 'http://image.tmdb.org/t/p/w500';
          errMsg.style.display = "none";

          fillForm(movieInfo, results[0]);

          // get not more than 12 movies
          if (results.length > 12) {
            movieInfo.errForMany = true;
            length = 12;
          }

          for (var i = 0; i < length; i++) {
            var a = document.createElement('A');
            var img = document.createElement('IMG');

            img.src = output + results[i].poster_path;
            img.alt = results[i].title;
            img.dataGenre = Genre.numToTxt(results[i].genre_ids);

            a.appendChild(img);
            group.appendChild(a);

            // code #1
            a.addEventListener('click', function(event) {
              var poster = document.getElementById('movie-poster');

              poster.src = event.target.currentSrc;
              poster.alt = event.target.alt;

              movieInfo.title = event.target.alt;
              movieInfo.genre = event.target.dataGenre;
              console.log(movieInfo);
            });
          }
        }
      }, function(data, status) {
        var json = JSON.stringify(data);
        console.log("ERROR", json, status);
      });
    };

    return poster;
  }
})();
