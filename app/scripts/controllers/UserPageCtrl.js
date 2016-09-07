(function() {
  angular
    .module('root')
    .controller('UserPageCtrl', ['Movie', '$cookies', UserPageCtrl]);

  function UserPageCtrl(Movie, $cookies) {
    this.currentUser = $cookies.get('currentUser');

    this.getReviews = function() {
      var arr = [];
      var movies = Movie.all;
      for (var i = 0; i < movies.length; i++) {
        if (movies[i].username === this.currentUser) {
          arr.push(movies[i]);
        }
      }
      return arr;
    }
  }
})();
