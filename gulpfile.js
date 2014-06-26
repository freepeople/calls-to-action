'use strict';

var fs = require('fs'),
    dir = './tasks/',
    tasks = fs.readdirSync(dir);

// load gulp tasks from directory
tasks.forEach(function (task) {
    require(dir + task);
});