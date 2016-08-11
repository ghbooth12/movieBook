(function() {
  angular
    .module('root')
    .controller('UserPageCtrl', ['Movie', UserPageCtrl]);

  function UserPageCtrl(Movie) {
    this.movie = {};
    this.addMovie = Movie.add;
  }
})();
