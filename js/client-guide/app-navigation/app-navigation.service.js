(function () {
'use strict';

angular.module('clientGuide')
.service('AppNavigationService', AppNavigationService);

AppNavigationService.$inject = [];
function AppNavigationService() {
  var service = this;
  service.stateList = [
    'gift',
    'time-to-pension',
    'expected-pension',
    'example-of-pension-savings',
    'investment-options',
    'you-know-unit-trusts',
    'do-not-underestimate-investment-risk',
    'lets-invest',
    'client-maturing-policy-amount',
    'life-insurance',
    'life-insurance-benefits',
    'next-steps',
  ];

  service.getStateList = function () {
    return service.stateList;
  };

  service.getNextState = function (stateName) {
    var nextState = null;
    if (service.stateList.indexOf(stateName) != -1 && (service.stateList.indexOf(stateName)+1) < service.stateList.length) {
      nextState = service.stateList[service.stateList.indexOf(stateName)+1];
    }
    return nextState;
  }

  service.getPreviousState = function (stateName) {

    var previousState = null;
    if (service.stateList.indexOf(stateName) != -1 && service.stateList.indexOf(stateName) > 0) {
      previousState = service.stateList[service.stateList.indexOf(stateName)-1];
    }
    return previousState;
  }

}

})();
