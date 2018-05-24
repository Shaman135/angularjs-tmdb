function ActorController($scope, $element, $http, $route, ActorsApi) {
  var self = this;
  this.actor = undefined;
  this.movies = [];
  this.$onChanges = function () {
    this.$routerOnActivate = function (next, previous) {
      var id = next.params.id;
      self.actor = ActorsApi.getActorById(id).then(res => {
        self.actor = res.data;
        this.profile_pic = 'https://image.tmdb.org/t/p/w300' + this.actor.profile_path;
      });
      self.movies = ActorsApi.getMovieCredits(id).then(res => self.movies = res.data.cast);
    };
  }
}

angular.module('moviesApp').component('actorComponent', {
  templateUrl: '../templates/actor-details.html',
  controller: ActorController,
  controllerAs: 'actorController'
});