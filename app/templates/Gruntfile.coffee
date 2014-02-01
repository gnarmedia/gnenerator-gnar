###
  Generator-Gnar Gruntfile
  http://gnarmedia.com
  @author Adam Murphy
###

# Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>

"use strict"

# Grunt module
module.exports = (grunt) ->

  # Load grunt tasks automatically
  require("load-grunt-tasks") grunt

  # Generator-Gnar Grunt config
  grunt.initConfig
    pkg: grunt.file.readJSON("package.json")

    # Set project info
    project:
      src: "src"                               # directory to process
      dest: "build"                            # directory to upload
      html: ["<%= project.src %>/html/*.html"] # html files

    slim:
      dist:                                      # Target
        options:                                 # Target options
          pretty: "true"                         # Uncompressed
        files:                                   # Dictionary of files
          "<%= project.dest %>/index.html": "<%= project.src %>/html/index.html.slim" # 'destination': 'source'

  ###
    Default task
    Run `grunt` on the command line
  ###
  grunt.registerTask "default", [
    "slim",
    # "copy",
    # "useminPrepare",
    # "usemin"
  ]
