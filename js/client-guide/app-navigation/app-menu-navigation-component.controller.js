(function () {
'use strict';

angular.module('clientGuide')
.controller('AppMenuNavigationComponentController',AppMenuNavigationComponentController);

AppMenuNavigationComponentController.$inject = ['AppNavigationService','$state'];
function AppMenuNavigationComponentController(AppNavigationService,$state) {
  var ctrl = this;

  ctrl.list = AppNavigationService.getStateList();

  ctrl.goToState = function (stateName) {
    $state.go(stateName);
  };



}


})();
