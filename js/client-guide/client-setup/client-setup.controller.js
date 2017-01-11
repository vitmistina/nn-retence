(function () {
'use strict';

angular.module('clientGuide')
.controller('ClientSetupController',ClientSetupController);

ClientSetupController.$inject = ['ClientSetupService'];

function ClientSetupController(ClientSetupService) {
  var ctrl = this;

  ctrl.client = ClientSetupService.getClientData();


  ctrl.update = function () {
    ClientSetupService.setClientData(ctrl.client);
  };

}


})();
