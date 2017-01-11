(function () {
'use strict';

angular.module('clientGuide')
.controller('ExpectedPensionController',ExpectedPensionController);

ExpectedPensionController.$inject = ['pensionCalculatorService'];
function ExpectedPensionController(pensionCalculatorService) {
  var $ctrl = this;
  $ctrl.averageMonthlyIncome = 25000;
  $ctrl.estimatedPension = null;
  $ctrl.incomeLoweredBy = 1000;
  $ctrl.yearsOfInsurance = 40;

  $ctrl.afterTaxIncomeLookupTableObject = {
    10000: 8900,
    15000: 12405,
    20000: 15850,
    25000: 19295,
    30000: 22740,
    35000: 26185,
    40000: 29630,
    45000: 33075
  };

  $ctrl.incomeSlider = {
    options: {
      floor: 10000,
      ceil: 45000,
      step: 5000,
      hideLimitLabels: true,
      hidePointerLabels: true,
      enforceRange: false,
      enforceStep: false,
      onChange: function () {
        $ctrl.update();
      },
    }
  };
  $ctrl.yearsOfInsuranceSlider = {
    options: {
      floor: 20,
      ceil: 50,
      step: 1,
      hideLimitLabels: true,
      hidePointerLabels: true,
      enforceRange: false,
      enforceStep: false,
      onChange: function () {
        $ctrl.update();
      },
    }
  };

  $ctrl.update = function () {
    // this should be a service, really
    var incomeTiers = {
      fullTier: null,
      reducedTier: null
    };
    if ($ctrl.averageMonthlyIncome <= 12423) {
      incomeTiers.fullTier = $ctrl.averageMonthlyIncome;
    } else if ($ctrl.averageMonthlyIncome <= 112928) {
      incomeTiers.fullTier = 12423;
      incomeTiers.reducedTier = $ctrl.averageMonthlyIncome - 12423;
    }
    $ctrl.estimatedPension = 2550+(incomeTiers.fullTier+incomeTiers.reducedTier*0.26)*0.015*$ctrl.yearsOfInsurance;
    $ctrl.incomeLoweredBy = 100 - 100 * $ctrl.estimatedPension / ($ctrl.afterTaxIncomeLookupTableObject[$ctrl.averageMonthlyIncome]);
  };
  $ctrl.update();
}

})();
