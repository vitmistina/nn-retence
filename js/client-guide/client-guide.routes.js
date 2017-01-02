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
      url: '/time-to-pension',
      templateUrl: 'js/client-guide/time-to-pension/time-to-pension.html',
      controller: 'TimeToPensionController',
      controllerAs: 'ctrl'
    })
    .state('expected-pension', {
      url: '/expected-pension',
      templateUrl: 'js/client-guide/expected-pension/expected-pension.html',
      controller: 'ExpectedPensionController',
      controllerAs: 'ctrl'
    })
    .state('gift', {
      url: '/gift',
      templateUrl: 'js/client-guide/gift/gift.html',
    })
    .state('example-of-pension-savings', {
      url: '/example-of-pension-savings',
      templateUrl: 'js/client-guide/example-of-pension-savings/example-of-pension-savings.html',
      controller: 'ExampleOfPensionSavingsController',
      controllerAs: 'ctrl'
    })
    .state('investment-options', {
      url: '/investment-options',
      templateUrl: 'js/client-guide/investment-options/investment-options.html'
    })
    .state('you-know-unit-trusts', {
      url: '/you-know-unit-trusts',
      templateUrl: 'js/client-guide/you-know-unit-trusts/you-know-unit-trusts.html'
    })
    .state('work-with-investment-risk', {
      url: '/work-with-investment-risk',
      templateUrl: 'js/client-guide/work-with-investment-risk/work-with-investment-risk.html'
    })
    .state('lets-invest', {
      url: '/lets-invest',
      templateUrl: 'js/client-guide/lets-invest/lets-invest.html'
    })
    .state('client-maturing-policy-amount', {
      url: '/client-maturing-policy-amount',
      templateUrl: 'js/client-guide/client-maturing-policy-amount/client-maturing-policy-amount.html'
    })
    .state('life-insurance', {
      url: '/life-insurance',
      templateUrl: 'js/client-guide/life-insurance/life-insurance.html'
    })
    .state('next-steps', {
      url: '/next-steps',
      templateUrl: 'js/client-guide/next-steps/next-steps.html'
    })
    .state('life-risk-insurance-status', {
      url: '/life-risk-insurance-status',
      templateUrl: 'js/client-guide/life-risk-insurance-status/life-risk-insurance-status.html'
    });

  $urlRouterProvider.otherwise('/time-to-pension');
}
})();
