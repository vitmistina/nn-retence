describe('pension calculator', function () {

  var pensionCalculatorService;

  beforeEach(function () {
    module('clientGuide');

    inject(function ($injector) {
      pensionCalculatorService = $injector.get('pensionCalculatorService');
    });


  });

  it('should return 2013 september for 1951 january man',function () {
    expect(pensionCalculatorService.getEstimatedYearOfRetirement(1951,0,'man')).toEqual({year:2013,month:"září",decimalValue:2013.6666666666667});
  });

  it('should return 2009 january for 1951 september woman with 3',function () {
    expect(pensionCalculatorService.getEstimatedYearOfRetirement(1951,8,'woman-3-kids')).toEqual({year:2009,month:"lednu",decimalValue:2009});
  });

  it('should predict time until retirement',function () {
    expect(pensionCalculatorService.getTimeUntilRetirement(1963,2,'woman-2-kids')).toEqual({ year: 9, month: 10, decimalValue: 9.833333333333485 });
  });



});
