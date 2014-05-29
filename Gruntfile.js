module.exports = function (grunt) {
    'use strict';
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
            dist: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            sass: {
                files: ['./sass/**/*.scss'],
                tasks: ['compass']
            }
        }
    });

    grunt.registerTask('build', ['compass']);
    grunt.registerTask('default', ['compass', 'watch']);
};