function MovieController($scope, $element, $http, $route, MoviesApi) {
  var self = this;
  this.movie = undefined;
  this.genres = [];
  this.actors = [];
  this.director = '';
  this.$onChanges = function () {
    this.$routerOnActivate = function (next, previous) {
      var id = next.params.id;
      self.movie = MoviesApi.getMovieById(id).then(res => {
        self.movie = res.data;
        self.genres = res.data.genres.map(genre => {
          return genre.name;
        });
        this.genres = self.genres.join(', ');
        this.actors = res.data.credits.cast;
        this.poster = 'https://image.tmdb.org/t/p/w300' + this.movie.poster_path
        this.director = res.data.credits.crew.filter(member => {
          if(member.job == "Director") {
            return member;
          }
        });
        this.director = this.director.map(item => item.name);
        this.director = this.director.join(', ');
      });
    };
  }

}

angular.module('moviesApp').component('movieComponent', {
  templateUrl: '../templates/movie-details.html',
  controller: MovieController,
  controllerAs: 'movieController',
  bindings: {}
});