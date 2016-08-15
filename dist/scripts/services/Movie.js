(function() {
  angular
    .module('root')
    .factory('Movie', ['$firebaseArray', 'Validation',  Movie]);

  function Movie($firebaseArray, Validation) {
    var ref = new Firebase('https://moviebook-58adb.firebaseio.com');
    var movies = $firebaseArray(ref.child('movies'));

    function add(movie) {
      var img = document.getElementById('movie-poster');
      var valid = Validation.validTitle(movie.title) === 'valid' &&
                  Validation.validGenre(movie.genre) === 'valid' &&
                  Validation.validReview(movie.review) === 'valid';

      if (valid) {
        movies.$add({
          img_src: img.src,
          title: movie.title,
          genre: movie.genre,
          rating: movie.rating,
          review: movie.review,
          memo: movie.memo || " ",
          createdAt: new Date().getTime()
        });
        this.movie = {};
      }
    }

    var obj = {
      all: movies,
      add: add
    };

    return obj;
  }
})();
