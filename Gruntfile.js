module.exports = function(grunt) {
    const sass = require('node-sass');
    grunt.initConfig({
        concat: {
          // concat task configuration goes here.
          js: {
              src: ['js/*.js'],//['js/jquery-1.12.4', 'js/jquery-popup.js', 'js/scripts/js'],
              dest: 'build/scripts.js'
          },
          css: {
            src: ['css/*.css'],
            dest: 'build/styles.css'
          }
        },
        sass: {
            build: {
                
                files: [{
                    src: 'css/sass/styles.scss',
                    dest: 'css/styles.css'
                }]
            },
            options: {
                implementation: sass
            },
        },
        uglify: {
            build: {
                
                files: [{
                    src: 'build/scripts.js',
                    dest: 'build/scripts.min.js'
                }]
            } 
        }
      });

      // load plugins
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      
      // register task
      grunt.registerTask('concat-js', ['concat:js']);
      grunt.registerTask('concat-css', ['concat:css']);
      grunt.registerTask('pre-compile', [
        'sass',
        'concat-js',
        'concat-css'
      ]);
      grunt.registerTask('default', ['pre-compile', 'uglify',]);


  };