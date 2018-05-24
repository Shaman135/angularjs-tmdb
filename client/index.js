angular.module('moviesApp', ['ngComponentRouter', 'ngResource'])
  .config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode(true);
  }])
  .value('$routerRootComponent', 'app')
  .component('app', {
    templateUrl: 'templates/main.html',
    $routeConfig: [
      {
        path: '/',
        name: 'About',
        component: 'aboutComponent'
      },
      {
        path: '/movies/',
        name: 'MoviesList',
        component: 'moviesListComponent'
      },
      {
        path: '/movie/:id',
        name: 'MovieDetails',
        component: 'movieComponent',
      },
      {
        path: '/actor/:id',
        name: 'ActorDetails',
        component: 'actorComponent'
      },
      {
        path: '/actors/',
        name: 'ActorsList',
        component: 'actorsListComponent'
      },
      {
        path: '/upcoming/',
        name: 'Upcoming',
        component: 'upcomingComponent'
      }
    ]
  });