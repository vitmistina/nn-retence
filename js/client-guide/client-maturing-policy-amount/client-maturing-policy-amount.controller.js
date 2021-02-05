(function () {
  "use strict";

  angular
    .module("clientGuide")
    .controller(
      "ClientMaturingPolicyAmountController",
      ClientMaturingPolicyAmountController
    );

  ClientMaturingPolicyAmountController.$inject = ["ClientSetupService"];

  function ClientMaturingPolicyAmountController(ClientSetupService) {
    var ctrl = this;

    ctrl.client = ClientSetupService.getClientData();
  }
})();
