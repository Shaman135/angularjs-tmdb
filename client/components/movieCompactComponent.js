function MovieCompactController($scope, $element, $http, $route) {
  var self = this;
  this.$onChanges = function() {
    if(this.movie.poster_path != null) {
      this.poster = 'https://image.tmdb.org/t/p/w300' + this.movie.poster_path 
    } else {
      this.poster = 'http://via.placeholder.com/100x142';
    }
  }
}

angular.module('moviesApp').component('movieCompactComponent', {
  templateUrl: '../templates/movie-compact.html',
  controller: MovieCompactController,
  controllerAs: 'movieCompact',
  bindings: {
    movie: '<'
  }
});