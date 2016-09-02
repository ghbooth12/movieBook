(function() {
  angular
    .module('root')
    .controller('UserPageCtrl', ['Movie', '$cookies', UserPageCtrl]);

  function UserPageCtrl(Movie, $cookies) {
    this.currentUser = $cookies.get('currentUser');
    
    var movies = Movie.all;
    console.log(movies.length);

    this.movieArr = [];

    for (var i = 0; i < movies.length; i++) {
      if (movies[i].username === this.currentUser) {
        this.movieArr.push(movies[i]);
      }
    }
  }
})();
