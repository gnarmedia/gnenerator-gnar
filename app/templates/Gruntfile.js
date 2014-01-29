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
      dist: 'dist',
      assets: '<%= project.dist %>/assets',
      css: [
        '<%= project.src %>/scss/style.scss'
      ],
      js: [
        '<%= project.src %>/js/*.js'
      ]
    }
  ]);

};
