var e = require('unexpected'),
    SyslogProxy = require('../'),
    sinon = require('sinon');

/*global describe, it, beforeEach*/

function TestRoot() {}

TestRoot.prototype.warning = sinon.spy()

describe('Logging w. prefix', function () {
    var l, o;

    beforeEach(function () {
        o = new TestRoot();
        l = new SyslogProxy(o, "prefix");
    });

    it('.warning("-%s-", message) returns [prefix] -message-', function () {
        l.warning('-%s-', 'message');
        e(o.warning.calledOnce, 'to be truthy');
        e(
            o.warning.firstCall.args,
            'to equal',
            ['[prefix] -message-']
        );
    });

});
