(function () {
  // 'use strict';

  angular
    .module("clientGuide")
    .service("pensionCalculatorService", pensionCalculatorService);

  pensionCalculatorService.$inject = [];

  function pensionCalculatorService() {
    var service = this;
    var currentYear = new Date().getFullYear();
    var currentMonth = new Date().getMonth();

    service.averageMonthlyIncome = 35000;
    service.afterTaxIncome = 19295;
    service.estimatedPension = 11966;
    service.genderName = "Radim";

    service.setGender = function (genderName) {
      if (genderName === "man") {
        service.genderName = "Radim";
      } else {
        service.genderName = "Jana";
      }
    };

    service.getEstimatedYearOfRetirement = function (
      yearOfBirth,
      monthOfBirth,
      gender
    ) {
      var yearsDecimalToRetirement;
      if (yearOfBirth > 1971) {
        yearsDecimalToRetirement = 65;
      } else {
        yearsDecimalToRetirement = service.loadRetirementAgeTableObject()[
          gender
        ][yearOfBirth];
      }
      var returnObject = {
        year: null,
        month: null,
        decimalValue: null,
      };
      returnObject.decimalValue =
        yearOfBirth + monthOfBirth / 12 + yearsDecimalToRetirement;
      returnObject.year = Math.floor(returnObject.decimalValue);
      returnObject.month = service.decodeMonths(
        Math.round((returnObject.decimalValue % 1) * 12)
      );
      return returnObject;
    };

    service.getTimeUntilRetirement = function (
      yearOfBirth,
      monthOfBirth,
      gender
    ) {
      var retirementTimeObject = service.getEstimatedYearOfRetirement(
        yearOfBirth,
        monthOfBirth,
        gender
      );
      var timeUntilRetirementObject = {
        year: null,
        month: null,
        decimalValue: null,
      };
      timeUntilRetirementObject.decimalValue =
        retirementTimeObject.decimalValue - currentYear - currentMonth / 12;
      timeUntilRetirementObject.year = Math.floor(
        timeUntilRetirementObject.decimalValue
      );
      timeUntilRetirementObject.month = Math.round(
        (timeUntilRetirementObject.decimalValue % 1) * 12
      );
      return timeUntilRetirementObject;
    };

    service.calculateExpectedPension = function (
      averageMonthlyIncome,
      yearsOfInsurance
    ) {
      var output = {
        estimatedPension: null,
        incomeLoweredBy: null,
      };
      var incomeTiers = {
        fullTier: null,
        reducedTier: null,
      };
      var wages = Array.from(new Array(19).keys()).map(function (val) {
        return val * 5000 + 10000;
      });
      var taxDeduction = 2320;
      var afterTaxIncomeLookupTableObject = wages.reduce(function (
        previous,
        wage
      ) {
        var socialInsurance = wage * 0.11;
        var incomeTax = Math.max(0, wage * 0.15 - taxDeduction);
        previous[wage] = wage - incomeTax - socialInsurance;
        return previous;
      },
      {});
      var fullTierTreshold = 12423;
      if (averageMonthlyIncome <= fullTierTreshold) {
        incomeTiers.fullTier = averageMonthlyIncome;
      } else {
        incomeTiers.fullTier = fullTierTreshold;
        incomeTiers.reducedTier = averageMonthlyIncome - fullTierTreshold;
      }
      output.estimatedPension =
        5530 +
        (incomeTiers.fullTier + incomeTiers.reducedTier * 0.26) *
          0.015 *
          yearsOfInsurance;
      output.incomeLoweredBy =
        100 -
        (100 * output.estimatedPension) /
          afterTaxIncomeLookupTableObject[averageMonthlyIncome];
      service.averageMonthlyIncome = averageMonthlyIncome;
      service.afterTaxIncome =
        afterTaxIncomeLookupTableObject[averageMonthlyIncome];
      service.estimatedPension = output.estimatedPension;
      return output;
    };

    service.estimateExpectedInvestment = function (averageMonthlyIncome) {
      var discountedIncome = Math.max(averageMonthlyIncome - 20000, 0);
      return 150000 + Math.pow(discountedIncome * 10, 1.07);
    };

    service.convertInvestmentTo5YearIncome = function (expectedInvestment) {
      return expectedInvestment * 0.0175;
    };

    service.decodeMonths = function (monthInt) {
      var lookupTableObject = {
        0: "lednu",
        1: "únoru",
        2: "březnu",
        3: "dubnu",
        4: "květnu",
        5: "červnu",
        6: "červenci",
        7: "srpnu",
        8: "září",
        9: "říjnu",
        10: "listopadu",
        11: "prosinci",
      };
      return lookupTableObject[monthInt];
    };

    // service.getCurrentAge = function (yearOfBirth) {
    //   return (currentYear - yearOfBirth);
    // };

    service.loadRetirementAgeTableObject = function () {
      var tableObject = {
        man: {
          1951: 62.6666666666667,
          1952: 62.8333333333333,
          1953: 63,
          1954: 63.1666666666667,
          1955: 63.3333333333333,
          1956: 63.5,
          1957: 63.6666666666667,
          1958: 63.8333333333333,
          1959: 64,
          1960: 64.1666666666667,
          1961: 64.3333333333333,
          1962: 64.5,
          1963: 64.6666666666667,
          1964: 64.8333333333333,
          1965: 65,
          1966: 65,
          1967: 65,
          1968: 65,
          1969: 65,
          1970: 65,
          1971: 65,
          1972: 65,
          1973: 65,
          1974: 65,
          1975: 65,
          1976: 65,
          1977: 65,
          1978: 65,
          1979: 65,
          1980: 65,
          1981: 65,
          1982: 65,
          1983: 65,
          1984: 65,
          1985: 65,
          1986: 65,
          1987: 65,
          1988: 65,
          1989: 65,
          1990: 65,
          1991: 65,
          1992: 65,
          1993: 65,
          1994: 65,
          1995: 65,
          1996: 65,
          1997: 65,
          1998: 65,
          1999: 65,
          2000: 65,
        },
        "woman-single": {
          1951: 61.3333333333333,
          1952: 61.6666666666667,
          1953: 62,
          1954: 62.3333333333333,
          1955: 62.6666666666667,
          1956: 63.1666666666667,
          1957: 63.6666666666667,
          1958: 63.8333333333333,
          1959: 64,
          1960: 64.1666666666667,
          1961: 64.3333333333333,
          1962: 64.5,
          1963: 64.6666666666667,
          1964: 64.8333333333333,
          1965: 65,
          1966: 65,
          1967: 65,
          1968: 65,
          1969: 65,
          1970: 65,
          1971: 65,
          1972: 65,
          1973: 65,
          1974: 65,
          1975: 65,
          1976: 65,
          1977: 65,
          1978: 65,
          1979: 65,
          1980: 65,
          1981: 65,
          1982: 65,
          1983: 65,
          1984: 65,
          1985: 65,
          1986: 65,
          1987: 65,
          1988: 65,
          1989: 65,
          1990: 65,
          1991: 65,
          1992: 65,
          1993: 65,
          1994: 65,
          1995: 65,
          1996: 65,
          1997: 65,
          1998: 65,
          1999: 65,
          2000: 65,
        },
        "woman-1-kid": {
          1951: 60,
          1952: 60.3333333333333,
          1953: 60.6666666666667,
          1954: 61,
          1955: 61.3333333333333,
          1956: 61.6666666666667,
          1957: 62.1666666666667,
          1958: 62.6666666666667,
          1959: 63.1666666666667,
          1960: 63.6666666666667,
          1961: 64.1666666666667,
          1962: 64.5,
          1963: 64.6666666666667,
          1964: 64.8333333333333,
          1965: 65,
          1966: 65,
          1967: 65,
          1968: 65,
          1969: 65,
          1970: 65,
          1971: 65,
          1972: 65,
          1973: 65,
          1974: 65,
          1975: 65,
          1976: 65,
          1977: 65,
          1978: 65,
          1979: 65,
          1980: 65,
          1981: 65,
          1982: 65,
          1983: 65,
          1984: 65,
          1985: 65,
          1986: 65,
          1987: 65,
          1988: 65,
          1989: 65,
          1990: 65,
          1991: 65,
          1992: 65,
          1993: 65,
          1994: 65,
          1995: 65,
          1996: 65,
          1997: 65,
          1998: 65,
          1999: 65,
          2000: 65,
        },
        "woman-2-kids": {
          1951: 58.6666666666667,
          1952: 59,
          1953: 59.3333333333333,
          1954: 59.6666666666667,
          1955: 60,
          1956: 60.3333333333333,
          1957: 60.6666666666667,
          1958: 61.1666666666667,
          1959: 61.6666666666667,
          1960: 62.1666666666667,
          1961: 62.6666666666667,
          1962: 63.1666666666667,
          1963: 63.6666666666667,
          1964: 64.1666666666667,
          1965: 64.6666666666667,
          1966: 65,
          1967: 65,
          1968: 65,
          1969: 65,
          1970: 65,
          1971: 65,
          1972: 65,
          1973: 65,
          1974: 65,
          1975: 65,
          1976: 65,
          1977: 65,
          1978: 65,
          1979: 65,
          1980: 65,
          1981: 65,
          1982: 65,
          1983: 65,
          1984: 65,
          1985: 65,
          1986: 65,
          1987: 65,
          1988: 65,
          1989: 65,
          1990: 65,
          1991: 65,
          1992: 65,
          1993: 65,
          1994: 65,
          1995: 65,
          1996: 65,
          1997: 65,
          1998: 65,
          1999: 65,
          2000: 65,
        },
        "woman-3-kids": {
          1951: 57.3333333333333,
          1952: 57.6666666666667,
          1953: 58,
          1954: 58.3333333333333,
          1955: 58.6666666666667,
          1956: 59,
          1957: 59.3333333333333,
          1958: 59.6666666666667,
          1959: 60.1666666666667,
          1960: 60.6666666666667,
          1961: 61.1666666666667,
          1962: 61.6666666666667,
          1963: 62.1666666666667,
          1964: 62.6666666666667,
          1965: 63.1666666666667,
          1966: 63.6666666666667,
          1967: 64.1666666666667,
          1968: 64.6666666666667,
          1969: 65,
          1970: 65,
          1971: 65,
          1972: 65,
          1973: 65,
          1974: 65,
          1975: 65,
          1976: 65,
          1977: 65,
          1978: 65,
          1979: 65,
          1980: 65,
          1981: 65,
          1982: 65,
          1983: 65,
          1984: 65,
          1985: 65,
          1986: 65,
          1987: 65,
          1988: 65,
          1989: 65,
          1990: 65,
          1991: 65,
          1992: 65,
          1993: 65,
          1994: 65,
          1995: 65,
          1996: 65,
          1997: 65,
          1998: 65,
          1999: 65,
          2000: 65,
        },
        "woman-4-kids": {
          1951: 57.3333333333333,
          1952: 57.6666666666667,
          1953: 58,
          1954: 58.3333333333333,
          1955: 58.6666666666667,
          1956: 59,
          1957: 59.3333333333333,
          1958: 59.6666666666667,
          1959: 60.1666666666667,
          1960: 60.6666666666667,
          1961: 61.1666666666667,
          1962: 61.6666666666667,
          1963: 62.1666666666667,
          1964: 62.6666666666667,
          1965: 63.1666666666667,
          1966: 63.6666666666667,
          1967: 64.1666666666667,
          1968: 64.6666666666667,
          1969: 65,
          1970: 65,
          1971: 65,
          1972: 65,
          1973: 65,
          1974: 65,
          1975: 65,
          1976: 65,
          1977: 65,
          1978: 65,
          1979: 65,
          1980: 65,
          1981: 65,
          1982: 65,
          1983: 65,
          1984: 65,
          1985: 65,
          1986: 65,
          1987: 65,
          1988: 65,
          1989: 65,
          1990: 65,
          1991: 65,
          1992: 65,
          1993: 65,
          1994: 65,
          1995: 65,
          1996: 65,
          1997: 65,
          1998: 65,
          1999: 65,
          2000: 65,
        },
        "woman-5-kids": {
          1951: 56,
          1952: 56.3333333333333,
          1953: 56.6666666666667,
          1954: 57,
          1955: 57.3333333333333,
          1956: 57.6666666666667,
          1957: 58,
          1958: 58.3333333333333,
          1959: 58.6666666666667,
          1960: 59.1666666666667,
          1961: 59.6666666666667,
          1962: 60.1666666666667,
          1963: 60.6666666666667,
          1964: 61.1666666666667,
          1965: 61.6666666666667,
          1966: 62.1666666666667,
          1967: 62.6666666666667,
          1968: 63.1666666666667,
          1969: 63.6666666666667,
          1970: 64.1666666666667,
          1971: 64.6666666666667,
          1972: 65,
          1973: 65,
          1974: 65,
          1975: 65,
          1976: 65,
          1977: 65,
          1978: 65,
          1979: 65,
          1980: 65,
          1981: 65,
          1982: 65,
          1983: 65,
          1984: 65,
          1985: 65,
          1986: 65,
          1987: 65,
          1988: 65,
          1989: 65,
          1990: 65,
          1991: 65,
          1992: 65,
          1993: 65,
          1994: 65,
          1995: 65,
          1996: 65,
          1997: 65,
          1998: 65,
          1999: 65,
          2000: 65,
        },
      };

      return tableObject;
    };
  }
})();
