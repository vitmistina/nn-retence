(function () {
'use strict';

angular.module('clientGuide')
.controller('TimeToPensionController',TimeToPensionController);

TimeToPensionController.$inject = ['pensionCalculatorService'];
function TimeToPensionController(pensionCalculatorService) {
  var $ctrl = this;


  $ctrl.genderList =
  {
    'man': 'Muž',
    'woman-single': 'Žena bez dětí',
    'woman-1-kid': 'Žena s 1 dítětem',
    'woman-2-kids': 'Žena s 2 dětmi',
    'woman-3-kids': 'Žena s 3 dětmi',
    'woman-4-kids': 'Žena s 4 dětmi',
    'woman-5-kids': 'Žena s 5 a více dětmi'
  };

  $ctrl.monthsList =
  {
    0: "leden",
    1: "únor",
    2: "březen",
    3: "duben",
    4: "květen",
    5: "červen",
    6: "červenec",
    7: "srpen",
    8: "září",
    9: "říjen",
    10: "listopad",
    11: "prosinec"
  };

  $ctrl.estimatedYearOfRetirement = null;
  $ctrl.yearOfBirth = 1956;
  $ctrl.monthOfBirth = '6';
  $ctrl.gender = "man";


  $ctrl.slider = {
    options: {
      floor: 1951,
      ceil: 2000,
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
    $ctrl.estimatedYearOfRetirement = pensionCalculatorService.getEstimatedYearOfRetirement($ctrl.yearOfBirth,$ctrl.monthOfBirth,$ctrl.gender);
    $ctrl.timeUntilRetirement = pensionCalculatorService.getTimeUntilRetirement($ctrl.yearOfBirth,$ctrl.monthOfBirth,$ctrl.gender);
  };

  $ctrl.update();

  $ctrl.setGender = function (genderName) {

    $ctrl.gender = genderName;
    $ctrl.update();
  };

  $ctrl.setGender = function (monthInt) {
    $ctrl.monthOfBirth = monthInt;
    $ctrl.update();
  };






}

})();
