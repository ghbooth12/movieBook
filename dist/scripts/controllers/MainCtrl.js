(function() {
  angular
    .module('root')
    .controller('MainCtrl', ['Movie', MainCtrl]);

  function MainCtrl(Movie) {
    this.allMovies = Movie.all;
  }
})();
