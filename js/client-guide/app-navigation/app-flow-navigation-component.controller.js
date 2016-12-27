(function () {
'use strict';

angular.module('clientGuide')
.controller('AppFlowNavigationComponentController',AppFlowNavigationComponentController);

AppFlowNavigationComponentController.$inject = ['$state','AppNavigationService'];
function AppFlowNavigationComponentController($state,AppNavigationService) {
  var ctrl = this;

  ctrl.goToNextState = function () {
    $state.go(AppNavigationService.getNextState($state.current.name));
  };

  ctrl.getNextState = function () {
    return AppNavigationService.getNextState($state.current.name);
  };

  ctrl.goToPreviousState = function () {
    $state.go(AppNavigationService.getPreviousState($state.current.name));
  };

  ctrl.getPreviousState = function () {
    return AppNavigationService.getPreviousState($state.current.name);
  };
}


})();
