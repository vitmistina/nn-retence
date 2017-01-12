module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },
      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Gruntfile.js', 'js/client-guide/**/*.js']
    },
    bower_concat: {
      options: {
        separator: ';\n'
      },
      build: {
        dest: {
          js: 'dist/js/app.js',
          css: 'dist/css/app.css'
        },
        mainFiles: {
         'angular-i18n': 'angular-locale_cs-cz.js',
         'angular-slider': 'slider.js',
         'modernizr': 'modernizr-build.js',
         'bootstrap-css': 'css/bootstrap.min.css',
         'countUp.js': ['countUp.js','angular-countUp.js']
        }
      }
    },
    clean: {
      build: {
        src: ['dist']
      }
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            src: 'index.html',
            dest: 'dist/'
          },
          {
            expand: true,
            src: 'js/client-guide/**/*.html',
            dest: 'dist/'
          },
          {
            expand: true,
            src: 'fonts/*',
            dest: 'dist/'
          },
          {
            expand: true,
            src: 'img/favicon.ico',
            dest: 'dist/'
          },
        ]

      }
    },
    concat: {
      options: {
        separator: ';\n'
      },
      js: {
        src: ['dist/js/app.js','js/client-guide/**/*.module.js','js/client-guide/**/*.js'],
        dest: 'dist/js/app.js',
      },
      css: {
        src: ['dist/css/app.css','css/main.css'],
        dest: 'dist/css/app.css',
      }
    },
    uglify: {
      build: {
        files: {
          'dist/js/app.js': ['dist/js/app.js']
        }
      }
    },
    cssmin: {
      build: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'dist/css/app.css': ['dist/css/app.css']
        }
      }
    },
    imagemin: {
      build: {
        options: {
          optimizationLevel: 1
        },
        files: [{
          expand:true,
          src: ['img/**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask(
    'build',
    'Compiles all of the assets and copies the files to the build directory.',
    [ 'clean', 'jshint', 'bower_concat', 'copy', 'concat:js', 'concat:css', 'uglify', 'cssmin','imagemin']
  );


};
