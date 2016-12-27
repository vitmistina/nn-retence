describe('app-navigation', function () {

  var AppNavigationService;

  beforeEach(function () {
    module('clientGuide');

    inject(function ($injector) {
      AppNavigationService = $injector.get('AppNavigationService');
    });

    AppNavigationService.stateList = [
      'gift',
      'time-to-pension',
      'expected-pension'
    ];
    
  });

  it('should return categories list', function() {
    expect(AppNavigationService.getStateList()).toEqual([
      'gift',
      'time-to-pension',
      'expected-pension'
    ]);
    });

  it('should return expected-pension as next after time-to-pension', function() {
    expect(AppNavigationService.getNextState('time-to-pension')).toEqual('expected-pension');
    });

  it('should return null as next with unknown State', function() {
    expect(AppNavigationService.getNextState('some non-existing state')).toEqual(null);
    });

  it('should return null as next after expected-pension', function() {
      expect(AppNavigationService.getNextState('expected-pension')).toEqual(null);
      });

  it('should return gift as previous before time-to-pension', function() {
    expect(AppNavigationService.getPreviousState('time-to-pension')).toEqual('gift');
    });

  it('should return null as previous with unknown State', function() {
    expect(AppNavigationService.getPreviousState('some non-existing state')).toEqual(null);
    });

  it('should return null as previous before gift', function() {
      expect(AppNavigationService.getPreviousState('gift')).toEqual(null);
      });

});
