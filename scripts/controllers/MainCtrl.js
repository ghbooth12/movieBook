(function() {
  angular
    .module('root')
    .controller('MainCtrl', ['Movie', 'PopUp', MainCtrl]);

  function MainCtrl(Movie, PopUp) {
    this.allMovies = Movie.all;
    this.openModal = PopUp.openModal;
  }
})();
