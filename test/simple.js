var e = require('unexpected'),
    SyslogProxy = require('../'),
    sinon = require('sinon');

/*global describe, it*/

describe('Inheritance', function () {
    var l;

    before(function () {
        l = new SyslogProxy("SOME RANDOM THING", "1");
    });

    it('Has prefix "1"', function () {
        e(l, 'to have property', '_prefix', '1');
    });

    it('Has the given root logger', function () {
        e(l, 'to have property', '_root', 'SOME RANDOM THING');
    });

    it('.getChild(2) has same root & prefix "1 2"', function () {
        var c = l.getChild('2');
        e(c, 'to have property', '_prefix', '1 2');
        e(c, 'to have property', '_root', 'SOME RANDOM THING');
    });

    it('.getRootProxy(3) has same root & prefix "3"', function () {
        var c = l.getRootProxy('3');
        e(c, 'to have property', '_prefix', '3');
        e(c, 'to have property', '_root', 'SOME RANDOM THING');
    });
});
