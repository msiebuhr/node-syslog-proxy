Syslog-proxy
============

Nice, proxy-like API for loggers that provide syslog-like interfaces.

    var SomeSyslog = require('my-logging-module'),
		SyslogProxy = require('syslog-proxy'),
		log = new SyslogProxy(SomeSyslog, 'program name');

	log.warning('foo');
	// -> WARNING w. text [program name] foo

	log.info('message: %s', 'bar');
	// -> INFO w. text [program name] message: bar

	var subsystemLog = log.getChild('subsystem');
	subsystemlog.debug('baz');
	// -> DEBUG w. text [program name subsystem] baz

License
=======

2-clause BSD
