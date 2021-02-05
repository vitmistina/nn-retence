module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    jshint: {
      options: {
        reporter: require("jshint-stylish"), // use jshint-stylish to make our errors look and read good
      },
      // when this task is run, lint the Gruntfile and all js files in src
      build: ["Gruntfile.js", "js/client-guide/**/*.js"],
    },
    bower_concat: {
      options: {
        separator: ";\n",
      },
      build: {
        dest: {
          js: "docs/js/app.js",
          css: "docs/css/app.css",
        },
        mainFiles: {
          "angular-i18n": "angular-locale_cs-cz.js",
          "angular-slider": "slider.js",
          modernizr: "modernizr-build.js",
          "bootstrap-css": "css/bootstrap.min.css",
          "countUp.js": "countUp.js",
          "countUp.js-angular1": "angular-countUp.js",
        },
      },
    },
    clean: {
      build: {
        src: ["docs"],
      },
    },
    copy: {
      build: {
        files: [
          {
            expand: true,
            src: "index.html",
            dest: "docs/",
          },
          {
            expand: true,
            src: "js/client-guide/**/*.html",
            dest: "docs/",
          },
          {
            expand: true,
            src: "fonts/*",
            dest: "docs/",
          },
          {
            expand: true,
            src: "img/favicon.ico",
            dest: "docs/",
          },
        ],
      },
    },
    concat: {
      options: {
        separator: ";\n",
      },
      js: {
        src: [
          "docs/js/app.js",
          "js/client-guide/**/*.module.js",
          "js/client-guide/**/*.js",
        ],
        dest: "docs/js/app.js",
      },
      css: {
        src: ["docs/css/app.css", "css/main.css"],
        dest: "docs/css/app.css",
      },
    },
    uglify: {
      build: {
        files: {
          "docs/js/app.js": ["docs/js/app.js"],
        },
      },
    },
    cssmin: {
      build: {
        options: {
          keepSpecialComments: 0,
        },
        files: {
          "docs/css/app.css": ["docs/css/app.css"],
        },
      },
    },
    imagemin: {
      build: {
        options: {
          optimizationLevel: 1,
        },
        files: [
          {
            expand: true,
            src: ["img/**/*.{png,jpg,gif}"],
            dest: "docs/",
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-bower-concat");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  grunt.registerTask(
    "build",
    "Compiles all of the assets and copies the files to the build directory.",
    [
      "clean",
      "jshint",
      "bower_concat",
      "copy",
      "concat:js",
      "concat:css",
      "uglify",
      "cssmin",
      "imagemin",
    ]
  );
};
