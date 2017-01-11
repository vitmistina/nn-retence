(function () {
'use strict';

angular.module('clientGuide')
.service('AppNavigationService', AppNavigationService);

AppNavigationService.$inject = [];
function AppNavigationService() {
  var service = this;
  service.stateList = [
    // {
    //   name: 'gift',
    //   prettyName: 'Dárek pro klienty'
    // },
    {
      name: 'client-setup',
      prettyName: 'Nastavení klienta'
    },
    {
      name: 'time-to-pension',
      prettyName: 'Doba do důchodu'
    },
    {
      name: 'expected-pension',
      prettyName: 'Očekávaná výše penze'
    },
    {
      name: 'example-of-pension-savings',
      prettyName: 'Příklad spoření na penzi'
    },
    {
      name: 'investment-options',
      prettyName: 'Možnosti investic'
    },
    {
      name: 'you-know-unit-trusts',
      prettyName: 'Podílové fondy'
    },
    {
      name: 'work-with-investment-risk',
      prettyName: 'Pracujte s investičním rizikem'
    },
    {
      name: 'lets-invest',
      prettyName: 'Pojďte investovat'
    },
    {
      name: 'client-maturing-policy-amount',
      prettyName: 'Kolik vám nesu'
    },
    {
      name: 'life-risk-insurance-status',
      prettyName: 'Končí krytí rizik'
    },
    {
      name: 'life-insurance',
      prettyName: 'Myslete na sebe a svou rodinu'
    },
    {
      name: 'next-steps',
      prettyName: 'Další kroky'
    },
  ];

  service.getStateList = function () {
    return service.stateList;
  };

  service.getNextStateName = function (stateName) {
    var nextState = null;
    if (service.stateList.map(function(e) { return e.name; }).indexOf(stateName) != -1 && (service.stateList.map(function(e) { return e.name; }).indexOf(stateName)+1) < service.stateList.length) {
      nextState = service.stateList[service.stateList.map(function(e) { return e.name; }).indexOf(stateName)+1].name;
    }
    return nextState;
  };

  service.getPreviousStateName = function (stateName) {
    var previousState = null;
    if (service.stateList.map(function(e) { return e.name; }).indexOf(stateName) != -1 && service.stateList.map(function(e) { return e.name; }).indexOf(stateName) > 0) {
      previousState = service.stateList[service.stateList.map(function(e) { return e.name; }).indexOf(stateName)-1].name;
    }
    return previousState;
  };

}

})();
