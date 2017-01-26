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
      name: 'guide.client-setup',
      prettyName: 'Nastavení klienta'
    },
    {
      name: 'guide.time-to-pension',
      prettyName: 'Za jak dlouho půjdete do důchodu?'
    },
    {
      name: 'guide.expected-pension',
      prettyName: 'Kolik budete mít v důchodu?'
    },
    {
      name: 'guide.example-of-pension-savings',
      prettyName: 'Můžete si polepšit...'
    },
    {
      name: 'guide.investment-options',
      prettyName: 'Jak můžete naložit se svými penězi?'
    },
    {
      name: 'guide.you-know-unit-trusts',
      prettyName: 'Podílové fondy už přeci znáte!'
    },
    {
      name: 'guide.work-with-investment-risk',
      prettyName: 'Nebojme se rizika, lze s ním pracovat'
    },
    {
      name: 'guide.lets-invest',
      prettyName: 'Je dobré peníze zhodnocovat?'
    },
    {
      name: 'guide.client-maturing-policy-amount',
      prettyName: 'Kolik vám nesu z vaší smlouvy?'
    },
    {
      name: 'guide.life-risk-insurance-status',
      prettyName: 'S končící smlouvou vám končí i pojistná ochrana'
    },
    {
      name: 'guide.life-insurance',
      prettyName: 'Nesu vám ještě 1 500 000 Kč navíc'
    },
    {
      name: 'guide.next-steps',
      prettyName: 'Co navrhujeme jako další kroky?'
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
