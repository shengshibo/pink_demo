module.exports = function (grunt) {
  // 初始化配置grunt任务
  grunt.initConfig({
    concat: { // 任务名
      options: {
        separator: ';',
      },
      dist: {
        // src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
        src: ['src/js/*.js'],
        // dest: 'dist/built.js'
        dest: 'build/js/build.js'
      }
    },
    uglify: {
      build: {
        files: {
          'build/js/build.min.js': ['build/js/build.js']
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc' // 指定配置文件
      },
      // build: ['Gruntfile.js', 'src/js/*.js'] // 指定检查的文件
      build: ['src/js/*.js'] // 指定检查的文件
    },
    cssmin: {
      build: {
        files: {
          'build/css/build.min.css': ['src/css/*.css']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/js/*.js', 'src/css/*.css'],
        tasks: ['concat', 'jshint', 'uglify', 'cssmin'],
        options: {spawn: false} // false：变量更新 true：全量更新
      }
    }
  })
  // grunt任务执行的时候去加载对应的任务插件
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-watch')
  // 注册grunt的默认任务 // grunt 执行任务是同步的
  grunt.registerTask('default', ['concat', 'uglify', 'jshint', 'cssmin'])
  grunt.registerTask('myWatch', ['default', 'watch'])
}

// 值得注意的是，未压缩的js文件不能出现es6语法