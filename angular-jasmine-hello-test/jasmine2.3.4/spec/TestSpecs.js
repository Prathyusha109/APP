
describe('myApp', function () {
    var scope,
    controller;
    beforeEach(function () {
        module('myApp');
    });

    describe('TestController', function () {
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('TestController', {
                '$scope': scope
            });
        }));
        it('Do I have greetings?', function () {
			//scope.greet = '';
          expect(scope.greet.length).not.toEqual(0)
        });

      it('Are greetings string type?', function () {
          //scope.greet = '123';
          expect(scope.greet).not.toMatch(/\d/g);
        });

      it('Does it say Hello World?', function () {
            //scope.greet = 'bye world';
            expect(scope.greet).toContain('Hello World');
        });
    });

});
