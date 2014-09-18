"use strict";

var Logger = require("../lib/logger.js");
var log = new Logger("test");

var logLevel = [
	'[EMERGENCY]',
	'[CRITICAL]',
	'[ALERT]',
	'[ERROR]',
	'[WARNING]',
	'[NOTICE]',
	'[INFO]',
	'[TRACE]', 
	'[DEBUG]'
];

(function newLog() {
	var level = (Math.random() * 3000)/1000 ;
	level = 8 - Math.floor(level*level);
	log.level(level, "test de message");
	setTimeout(newLog,Math.floor((Math.random() * 1000) + 1 ));
})();
