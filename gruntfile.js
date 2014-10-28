module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['public/js/**/*.js']
    },

  watch: {
      css: {
        files: ['public/css/*.css'],
        tasks: ['cssmin']
      },
      js: {
        files: ['public/src/js/**/*.js'],
        tasks: ['jshint', 'uglify']
      }
    },
	// configure nodemon
  	nodemon: {
      dev: {
        script: 'server.js'
      }
    },

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }

  });

  // load nodemon
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  // register the nodemon task when we run grunt
  grunt.registerTask('default', ['nodemon']);

};
