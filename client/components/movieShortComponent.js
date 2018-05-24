function MovieShortController($scope, $element, $http, $route, MoviesApi) {
  var self = this;
  this.$onChanges = function() {
    if(this.movie.poster_path != null) {
      this.poster = 'https://image.tmdb.org/t/p/w300' + this.movie.poster_path;
    } else {
      this.poster = 'http://via.placeholder.com/240x355';
    }
  }
}

angular.module('moviesApp').component('movieShortComponent', {
  templateUrl: '../templates/movie-short.html',
  controller: MovieShortController,
  controllerAs: 'movieShort',
  bindings: {
    movie: '<'
  }
});