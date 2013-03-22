
var manager = require('../../server/manager');

exports.collect = function(data) {
	var ws = this;
	// broadcast to watcher

	manager.broadcast('diskusage', 'update', {
		name: ws.hostname,
		data: data
	});
};

