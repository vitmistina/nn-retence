(function () {
'use strict';

angular.module('clientGuide')
.controller('ExampleOfPensionSavingsController',ExampleOfPensionSavingsController);

ExampleOfPensionSavingsController.$inject = ['pensionCalculatorService'];

function ExampleOfPensionSavingsController(pensionCalculatorService) {
  var ctrl = this;

  ctrl.expectedInvestment = pensionCalculatorService.estimateExpectedInvestment(pensionCalculatorService.averageMonthlyIncome);
  ctrl.genderName = pensionCalculatorService.genderName;


  ctrl.bar = {
    labels: ['Před důchodem','Starobní důchod','S investicí'],
    series: ['Čistá mzda před důchodem','Starobní důchod','Výplata naspořených prostředků'],
    data: [
            [pensionCalculatorService.afterTaxIncome,0,0],
            [0,pensionCalculatorService.estimatedPension,pensionCalculatorService.estimatedPension],
            [0,0,pensionCalculatorService.convertInvestmentTo5YearIncome(ctrl.expectedInvestment)]

          ],
    colors: [
      {
        backgroundColor: "#ea650d",
        pointBackgroundColor: "#ea650d",
        pointHoverBackgroundColor: "#ea650d",
        borderColor: "#ea650d",
        pointBorderColor: '#fff',
        pointHoverBorderColor: "#ea650d"
      },

      {
        backgroundColor: "#ee7f00",
        pointBackgroundColor: "#ee7f00",
        pointHoverBackgroundColor: "#ee7f00",
        borderColor: "#ee7f00",
        pointBorderColor: '#fff',
        pointHoverBorderColor: "#ee7f00"
      },
      {
        backgroundColor: "#c8cd2e",
        pointBackgroundColor: "#c8cd2e",
        pointHoverBackgroundColor: "#c8cd2e",
        borderColor: "#c8cd2e",
        pointBorderColor: '#fff',
        pointHoverBorderColor: "#c8cd2e"
      }

    ],
    options: {
                scales: {
                  yAxes: [{
                    stacked: true
                  }],
                  xAxes: [{
                    stacked: true,
                    // display:false
                  }]
                }
              }
  };

}

})();
