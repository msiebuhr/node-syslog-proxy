var format = require('util').format;

function SyslogProxy(root, prefix) {
    this._root = root;
    this._prefix = prefix || "";
}

// Talking to other stuff
SyslogProxy.prototype.getChild = function (extraPrefix) {
    return new SyslogProxy(this._root, this._prefix + ' ' + extraPrefix);
};

SyslogProxy.prototype.getRootProxy = function (prefix) {
    return new SyslogProxy(this._root, prefix);
};

// Central collection point
SyslogProxy.prototype.log = function (level, args) {
    // XXX: We expect the root logger to discard irrelevant stuff
    this._root[level]('[' + this._prefix + '] ' + format.apply(null, args));
};

// External POSIX-ish interface
[
    'emergency',
    'alert',
    'critical',
    'error',
    'warning',
    'notice',
    'info',
    'debug'
].forEach(function (level) {
    SyslogProxy.prototype[level] = function (msg) {
        this.log(level, arguments);
    };
});

module.exports = SyslogProxy;
