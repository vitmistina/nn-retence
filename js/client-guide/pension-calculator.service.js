(function () {
'use strict';

angular.module('clientGuide')
.service('pensionCalculatorService',pensionCalculatorService);



function pensionCalculatorService() {
  var service = this;
  var currentYear = new Date().getFullYear();


  service.getEstimatedYearOfRetirement = function (yearOfBirth,gender) {
    var lookupTable = service.loadRetirementAgeTableObject();
    return (yearOfBirth+lookupTable[yearOfBirth]);
  };


  service.getTimeUntilRetirementInYears = function (yearOfBirth,gender) {
    return (service.getEstimatedYearOfRetirement(yearOfBirth,gender)-currentYear);
  };

  service.getCurrentAge = function (yearOfBirth) {
    return (currentYear - yearOfBirth);
  };

  service.loadRetirementAgeTableObject = function () {
    var tableObject = {
      '1950' : 62.5,
      '1951' : 62.6666666666667,
      '1952' : 62.8333333333333,
      '1953' : 63,
      '1954' : 63.1666666666667,
      '1955' : 63.3333333333333,
      '1956' : 63.5,
      '1957' : 63.6666666666667,
      '1958' : 63.8333333333333,
      '1959' : 64,
      '1960' : 64.1666666666667,
      '1961' : 64.3333333333333,
      '1962' : 64.5,
      '1963' : 64.6666666666667,
      '1964' : 64.8333333333333,
      '1965' : 65,
      '1966' : 65.1666666666667,
      '1967' : 65.3333333333333,
      '1968' : 65.5,
      '1969' : 65.6666666666667,
      '1970' : 65.8333333333333,
      '1971' : 66,
      '1972' : 66.1666666666667,
      '1973' : 66.3333333333333,
      '1974' : 66.5,
      '1975' : 66.6666666666667,
      '1976' : 66.8333333333333,
      '1977' : 67,
      '1978' : 67.1666666666667,
      '1979' : 67.3333333333333,
      '1980' : 67.5,
      '1981' : 67.6666666666667,
      '1982' : 67.8333333333333,
      '1983' : 68,
      '1984' : 68.1666666666667,
      '1985' : 68.3333333333333,
      '1986' : 68.5,
      '1987' : 68.6666666666667,
      '1988' : 68.8333333333333,
      '1989' : 69,
      '1990' : 69.1666666666667,
      '1991' : 69.3333333333333,
      '1992' : 69.5,
      '1993' : 69.6666666666667,
      '1994' : 69.8333333333333,
      '1995' : 70,
      '1996' : 70.1666666666667,
      '1997' : 70.3333333333333,
      '1998' : 70.5,
      '1999' : 70.6666666666667,
      '2000' : 70.8333333333333,
      '2001' : 71,
      '2002' : 71.1666666666667,
      '2003' : 71.3333333333333,
      '2004' : 71.5,
      '2005' : 71.6666666666667,
      '2006' : 71.8333333333333,
      '2007' : 72,
      '2008' : 72.1666666666667,
    };

    return tableObject;
  };
}

})();
