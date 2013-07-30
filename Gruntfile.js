module.exports = function(grunt) {
    // 配置
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        concat : {
            js : {
                src: ['static/js/dev/yui-min.js', 'static/js/dev/common.js'],
                dest: 'static/js/concat.common.js'
            },
            css : {
                src: ['static/css/dev/base.css', 'static/css/dev/common.css', 'static/css/dev/response.css'],
                dest: 'static/css/concat.common.css'
            }
        },
        uglify : {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'static/js/concat.common.js',
                dest : 'static/js/min.common.js'
            }
        },
        cssmin: {
            options : {
                banner : '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            css: {
                src: 'static/css/concat.common.css',
                dest: 'static/css/min.common.css'
            }
        }
    });
    // 载入concat和uglify插件，分别对于合并和压缩
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');
    // 注册任务
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);
}; 