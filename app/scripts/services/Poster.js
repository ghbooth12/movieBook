(function() {
  angular
    .module('root')
    .factory('Poster', ['Genre', Poster]);

  function Poster(Genre) {
    var poster = {};

    poster.createUrl = function(movieInfo) {
      var base = 'http://api.themoviedb.org/3';
      var service = '/search/movie';
      var apiKey = '75eb3f0904ccb7d88cdb1b78a29f23b3';
      var title = movieInfo.title;
      var callback = 'JSON_CALLBACK'; // provided by angular.js
      var url = base + service + '?api_key=' + apiKey + '&query=' + title + '&callback=' + callback;

      return url;
    };

    poster.removeResults = function() { // remove previous result
      var group = document.getElementById('result-group');
      var errNotFound = document.getElementById('err-not-found');
      var errForMany = document.getElementById('err-for-many');
      var poster = document.getElementById('movie-poster');
      var genre = document.getElementById('genre');

      while (group.hasChildNodes()) { // remove Search Result
        group.removeChild(group.firstChild);
      }

      errNotFound.style.display = "none";
      errForMany.style.display = "none";

      poster.src = "/assets/images/film_icon.png";
      poster.alt = "Default Image";
      genre.value = "";
    };

    poster.displayResults = function(results) {
      var group = document.getElementById('result-group');
      var errNotFound = document.getElementById('err-not-found');
      var errForMany = document.getElementById('err-for-many');
      var length = results.length;

      if (length === 0) {  // movie not found
        errNotFound.style.display = "block";
        errForMany.style.display = "none";
      } else {  // one or more movies found
        var output = 'http://image.tmdb.org/t/p/w500';
        errNotFound.style.display = "none";

        // get not more than 12 movies
        if (length > 12) {
          errForMany.style.display = "block";
          length = 12;
        }

        for (var i = 0; i < length; i++) {
          var a = document.createElement('A');
          var img = document.createElement('IMG');

          if (results[i].poster_path === null) {
            img.src = "/assets/images/film_icon.png";
          } else {
            img.src = output + results[i].poster_path;
          }

          img.alt = results[i].title;
          img.dataGenre = Genre.numToTxt(results[i].genre_ids);

          a.appendChild(img);
          group.appendChild(a);

          // click poster thumbnail
          a.addEventListener('click', function(event) {
            var poster = document.getElementById('movie-poster');
            var title = document.getElementById('title');
            var genre = document.getElementById('genre');

            poster.src = event.target.currentSrc;
            poster.alt = event.target.alt;

            title.value = event.target.alt;
            genre.value = event.target.dataGenre;
          });
        }
      }
    };

    return poster;
  }
})();
