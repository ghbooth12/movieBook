(function() {
  angular
    .module('root')
    .factory('Movie', ['$firebaseArray', Movie]);

  function Movie($firebaseArray) {
    var ref = new Firebase('https://moviebook-58adb.firebaseio.com');
    var movies = $firebaseArray(ref.child('movies'));

    function add(movie) {
      if (movie.title && movie.rating && movie.review) {
        movies.$add({
          title: movie.title,
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
