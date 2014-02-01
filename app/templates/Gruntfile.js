/*!
 * Generator-Gnar Gruntfile
 * http://gnarmedia.com
 * @author Adam Murphy
 */

// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

'use strict';

/**
 * Grunt module
 */
module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  /**
   * Generator-Gnar Grunt config
   */
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    /**
     * Set project info
     */
    project: {
      src: 'src',
      dest: 'build',
      assets: '<%= project.dest %>/assets',
      css: [
        '<%= project.src %>/scss/style.scss'
      ],
      js: [
        '<%= project.src %>/js/*.js'
      ],
      html: [
        '<%= project.src %>/html/*.html'
      ]
    },

    /**
     * Copy
     * copy files and folders
     * https://github.com/gruntjs/grunt-contrib-copy
     */
    copy: {
      html: {
        src: '<%= project.src %>/html/index.html',
        dest: '<%= project.dest %>/index.html'
      }
    }

  });

  /**
   * Default task
   * Run `grunt` on the command line
   */
  grunt.registerTask('default', [
    'copy'
  ]);

};
