(function() {
'use strict';

angular.module('clientGuide')
.config(routeConfig);

/**
 * Configures the routes and views
 */

routeConfig.$inject = ['$stateProvider','$urlRouterProvider','localStorageServiceProvider'];
function routeConfig ($stateProvider,$urlRouterProvider,localStorageServiceProvider) {
  // Routes
  $stateProvider
    .state('guide',{
      url:'/guide',
      templateUrl: 'js/client-guide/guide/guide.html',
      abstract:true,
      controller: 'GuideController',
      controllerAs: 'ctrl'
    })
    .state('guide.time-to-pension', {
      url: '/time-to-pension',
      templateUrl: 'js/client-guide/time-to-pension/time-to-pension.html',
      controller: 'TimeToPensionController',
      controllerAs: 'ctrl'
    })
    .state('guide.expected-pension', {
      url: '/expected-pension',
      templateUrl: 'js/client-guide/expected-pension/expected-pension.html',
      controller: 'ExpectedPensionController',
      controllerAs: 'ctrl'
    })
    .state('guide.gift', {
      url: '/gift',
      templateUrl: 'js/client-guide/gift/gift.html',
    })
    .state('guide.example-of-pension-savings', {
      url: '/example-of-pension-savings',
      templateUrl: 'js/client-guide/example-of-pension-savings/example-of-pension-savings.html',
      controller: 'ExampleOfPensionSavingsController',
      controllerAs: 'ctrl'
    })
    .state('guide.investment-options', {
      url: '/investment-options',
      templateUrl: 'js/client-guide/investment-options/investment-options.html'
    })
    .state('guide.you-know-unit-trusts', {
      url: '/you-know-unit-trusts',
      templateUrl: 'js/client-guide/you-know-unit-trusts/you-know-unit-trusts.html'
    })
    .state('guide.work-with-investment-risk', {
      url: '/work-with-investment-risk',
      templateUrl: 'js/client-guide/work-with-investment-risk/work-with-investment-risk.html'
    })
    .state('guide.lets-invest', {
      url: '/lets-invest',
      templateUrl: 'js/client-guide/lets-invest/lets-invest.html'
    })
    .state('guide.client-maturing-policy-amount', {
      url: '/client-maturing-policy-amount',
      templateUrl: 'js/client-guide/client-maturing-policy-amount/client-maturing-policy-amount.html',
      controller: 'ClientMaturingPolicyAmountController',
      controllerAs: 'ctrl'
    })
    .state('guide.life-insurance', {
      url: '/life-insurance',
      templateUrl: 'js/client-guide/life-insurance/life-insurance.html'
    })
    .state('guide.next-steps', {
      url: '/next-steps',
      templateUrl: 'js/client-guide/next-steps/next-steps.html'
    })
    .state('guide.life-risk-insurance-status', {
      url: '/life-risk-insurance-status',
      templateUrl: 'js/client-guide/life-risk-insurance-status/life-risk-insurance-status.html'
    })
    .state('guide.client-setup', {
      url: '/client-setup',
      templateUrl: 'js/client-guide/client-setup/client-setup.html',
      controller: 'ClientSetupController',
      controllerAs: 'ctrl'
    })
    .state('restricted-access',{
      url: '/restricted-access',
      template: '<h2>Prosím proklikněte se přes www.nnporadce.cz</h2>'
    });

  $urlRouterProvider.otherwise('/guide/client-setup');

  // localStorageServiceProvider
  //   .setStorageType('sessionStorage');
}

// runFunction.$inject = ['$rootScope'];
// function runFunction($rootScope) {
//   $rootScope.$on('$stateChangeStart',function(event, toState, toParams, fromState, fromParams){
//     console.log('$stateChangeStart to '+toState.name+'- fired when the transition begins. toState,toParams : \n',toState, toParams);
//   });
//   $rootScope.$on('$stateChangeError',function(event, toState, toParams, fromState, fromParams, error){
//     console.log('$stateChangeError - fired when an error occurs during transition.');
//     console.log(arguments);
//   });
//   $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
//     console.log('$stateChangeSuccess to '+toState.name+'- fired once the state transition is complete.');
//   });
//   $rootScope.$on('$viewContentLoading',function(event, viewConfig){
//      console.log('$viewContentLoading - view begins loading - dom not rendered',viewConfig);
//   });
//
//   /* $rootScope.$on('$viewContentLoaded',function(event){
//        // runs on individual scopes, so putting it in "run" doesn't work.
//        console.log('$viewContentLoaded - fired after dom rendered',event);
//      }); */
//
//   $rootScope.$on('$stateNotFound',function(event, unfoundState, fromState, fromParams){
//     console.log('$stateNotFound '+unfoundState.to+'  - fired when a state cannot be found by its name.');
//     console.log(unfoundState, fromState, fromParams);
//   });
// }
})();
