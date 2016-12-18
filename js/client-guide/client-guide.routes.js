(function() {
'use strict';

angular.module('clientGuide')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function routeConfig ($stateProvider,$urlRouterProvider) {
  // Routes
  $stateProvider
    .state('time-to-pension', {
      url: '/',
      templateUrl: 'js/client-guide/time-to-pension/time-to-pension.html',
      controller: 'timeToPensionController',
      controllerAs: 'ctrl'
    })
    .state('expected-pension', {
      url: '/expected-pension',
      templateUrl: 'js/client-guide/expected-pension/expected-pension.html',
      controller: 'expectedPensionController',
      controllerAs: 'ctrl'
    });

  $urlRouterProvider.otherwise('/');
}
})();
