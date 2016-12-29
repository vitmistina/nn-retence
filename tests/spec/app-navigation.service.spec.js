describe('app-navigation', function () {

  var AppNavigationService;

  beforeEach(function () {
    module('clientGuide');

    inject(function ($injector) {
      AppNavigationService = $injector.get('AppNavigationService');
    });

    AppNavigationService.stateList = [
      {
        name: 'gift',
        prettyName: 'Dárek pro klienty'
      },
      {
        name: 'time-to-pension',
        prettyName: 'Doba do důchodu'
      },
      {
        name: 'expected-pension',
        prettyName: 'Očekávaná výše penze'
      }
    ];

  });

  it('should return categories list', function() {
    expect(AppNavigationService.getStateList()).toEqual([
      {
        name: 'gift',
        prettyName: 'Dárek pro klienty'
      },
      {
        name: 'time-to-pension',
        prettyName: 'Doba do důchodu'
      },
      {
        name: 'expected-pension',
        prettyName: 'Očekávaná výše penze'
      }
    ]);
    });

  it('should return expected-pension as next after time-to-pension', function() {
    expect(AppNavigationService.getNextStateName('time-to-pension')).toEqual('expected-pension');
    });

  it('should return null as next with unknown State', function() {
    expect(AppNavigationService.getNextStateName('some non-existing state')).toEqual(null);
    });

  it('should return null as next after expected-pension', function() {
      expect(AppNavigationService.getNextStateName('expected-pension')).toEqual(null);
      });

  it('should return gift as previous before time-to-pension', function() {
    expect(AppNavigationService.getPreviousStateName('time-to-pension')).toEqual('gift');
    });

  it('should return null as previous with unknown State', function() {
    expect(AppNavigationService.getPreviousStateName('some non-existing state')).toEqual(null);
    });

  it('should return null as previous before gift', function() {
      expect(AppNavigationService.getPreviousStateName('gift')).toEqual(null);
      });

});
