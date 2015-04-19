module.exports = function (grunt) {
    'use strict';
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            options: { force: true },
            release: ['./../../../Release/SharpenTheDevSaw/Deploy/*', '!./../../../Release/SharpenTheDevSaw/Deploy/.git/**'],
            buildFiles: ['./../../../Release/SharpenTheDevSaw/Build/*']
        },
        concat: {
			//options: { separator: ';' },
			release: {
				src: ['Scripts/*.js'],
				dest: './../../../Release/SharpenTheDevSaw/Build/sharpenTheDevSaw.js'
			}
		},
		uglify: {
			release: {
				files: {
					'./../../../Release/SharpenTheDevSaw/Deploy/Scripts/sharpenTheDevSaw.min.js' : ['Scripts/settings.js', 'Scripts/statsCalculator.js', 'Scripts/AppViewModel.js'],
					'./../../../Release/SharpenTheDevSaw/Deploy/Scripts/Libs/libs.min.js' : ['Scripts/Libs/knockout-3.3.0.js', 'Scripts/Libs/countUp.min.js', 'Scripts/Libs/classie.js']
				}
			},
			options: {
				compress: {
					drop_console: true
				}
			}
		},
		cssmin: {
			release: {
				files : {
					'./../../../Release/SharpenTheDevSaw/Deploy/Content/style.min.css': ['Content/bootstrap.css', 'Content/animate.css', 'Content/sharpenTheSaw.css']
				}
			}
		},
		processhtml: {
			options: {
				data: {
					styles:
					    '<link href="Content/style.min.css" rel="stylesheet"/>',
					scripts:
					    '<script src="Scripts/Libs/libs.min.js"></script>' +
					    '<script src="Scripts/sharpenTheDevSaw.min.js"></script>'
				}
			},
			release: {
				files: {
					'./../../../Release/SharpenTheDevSaw/Build/index.html': ['index.html']
				}
			}
		},
		htmlmin: {
			release: {
				options: {
					removeComments: true,
					removeOptionalTags: true,
					collapseWhitespace: true
				},
				files: {
					'./../../../Release/SharpenTheDevSaw/Deploy/index.html': ['./../../../Release/SharpenTheDevSaw/Build/index.html']
				}
			}
		},
        exec: {
            git_add: {
                cwd: './../../../Release/SharpenTheDevSaw/Deploy/',
                command: 'git add . --all'
            },
            git_commit: {
                cwd: './../../../Release/SharpenTheDevSaw/Deploy/',
                command: 'git commit -m "Deploy: <%grunt.template.today(\"dd-mm-yyy @ hh:MM:ss TT\") %>"'
            },
            git_push: {
                cwd: './../../../Release/SharpenTheDevSaw/Deploy/',
                command: 'git push azure master'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-exec');

    grunt.registerTask('default', ['clean']);
    grunt.registerTask('build', ['clean', 'uglify', 'cssmin', 'processhtml', 'htmlmin', 'exec']);
};
