function ActorCompactController($scope, $element, $http, $route, ActorsApi) {
  var self = this;
  this.$onChanges = function() {
    if(this.actor.profile_path != null) {
      this.profile_pic = 'https://image.tmdb.org/t/p/w300' + this.actor.profile_path;      
    } else {
      this.profile_pic = 'http://via.placeholder.com/100x142';
    }
  }
}

angular.module('moviesApp').component('actorCompactComponent', {
  templateUrl: '../templates/actor-compact.html',
  controller: ActorCompactController,
  controllerAs: 'actorCompact',
  bindings: {
    actor: '<'
  }
});