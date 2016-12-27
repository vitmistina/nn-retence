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
      template: '<h1>Jaké máte možnosti zhodnocení prostředků?</h1>'
    })
    .state('you-know-unit-trusts', {
      url: '/you-know-unit-trusts',
      template: '<h1>Podílové fondy už přeci znáte!</h1>'
    })
    .state('do-not-underestimate-investment-risk', {
      url: '/do-not-underestimate-investment-risk',
      template: '<h1>Nepodceňte investiční riziko</h1>'
    })
    .state('lets-invest', {
      url: '/lets-invest',
      template: '<h1>Souhlasíte, že dobré peníze rozmnožit?</h1><p class="quote">Investice je proces, při kterém se dnes vzdáte peněz s očekáváním, že díky v budoucnu obdržíte větší než investovanou částku.</p><p class="quote-author">Warren Buffet</p>'
    })
    .state('client-maturing-policy-amount', {
      url: '/client-maturing-policy-amount',
      template: '<h1>Kolik vám vlastně nesu?</h1>'
    })
    .state('next-steps', {
      url: '/next-steps',
      template: '<h1>Co navrhujeme jako další kroky?</h1>'
    })
    .state('life-insurance', {
      url: '/life-insurance',
      template: '<h1>Nesu vám ještě 1 500 000 Kč navíc</h1>'
    })
    .state('life-insurance-benefits', {
      url: '/life-insurance-benefits',
      template: '<h1>Jaké další výhody má NN Život?</h1>'
    });

  $urlRouterProvider.otherwise('/gift');
}
})();
