module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			compile: {
				options: {
					paths: ["css-langs/less/"]
				},
				files: {
					"resources/css/blue-and-white.css": "css-langs/less/colors/blue-and-white.less",
					"resources/css/yellow-and-black.css": "css-langs/less/colors/yellow-and-black.less",
					"resources/css/aqua-and-dark-blue.css": "css-langs/less/colors/aqua-and-dark-blue.less",
					"resources/css/aqua-and-black.css": "css-langs/less/colors/aqua-and-black.less",
					"resources/css/green-and-dark-blue.css": "css-langs/less/colors/green-and-dark-blue.less",
					"resources/css/pink-and-grey.css": "css-langs/less/colors/pink-and-grey.less",
					"resources/css/brown-and-beige.css": "css-langs/less/colors/brown-and-beige.less",
					"resources/css/grey-and-cobalt.css": "css-langs/less/colors/grey-and-cobalt.less"

				}
			}
		},
		sass: {
			compile: {
				files: {
					"resources/css/blue-and-white.css": "css-langs/sass/colors/blue-and-white.scss",
					"resources/css/yellow-and-black.css": "css-langs/sass/colors/yellow-and-black.scss",
					"resources/css/aqua-and-dark-blue.css": "css-langs/sass/colors/aqua-and-dark-blue.scss",
					"resources/css/aqua-and-black.css": "css-langs/sass/colors/aqua-and-black.scss",
					"resources/css/green-and-dark-blue.css": "css-langs/sass/colors/green-and-dark-blue.scss",
					"resources/css/pink-and-grey.css": "css-langs/sass/colors/pink-and-grey.scss",
					"resources/css/brown-and-beige.css": "css-langs/sass/colors/brown-and-beige.scss",
					"resources/css/grey-and-cobalt.css": "css-langs/sass/colors/grey-and-cobalt.scss"

				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			less: {
				files: ['css-langs/less/*.less', 'css-langs/less/colors/*.less'],
				tasks: ['less:compile']
			},
			//sass: {
			//	files: ['css-langs/sass/*.scss', 'css-langs/sass/colors/*.scss'],
			//	tasks: ['sass:compile']
			//},
			scripts: {
				files: ['resources/js/*.js']
			},
			html: {
				files: ['*.html']
			}
		},

		copy: {
			dist: {
				files: [
					{
						expand: true,
						dot: true,
						cwd: "./",
						dest: "dist",
						src: ["*.html", "resources/**/*"]
					}
				]
			}
		},

		clean: {
			dist: {
				files: [
					{
						dot: true,
						src: ["dist/*", "!dist/.git*"]
					}
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				hostname: 'localhost'
			},
			dev: {
				options: {
					middleware:
						function (connect) {
							return [
								require('connect-livereload')(),
								connect.static(require('path').resolve('.'))
							];
					}
				}
			}
		}
	});

	grunt.registerTask("server", ["connect:dev", "watch"]);
	grunt.registerTask("build", ["less:compile", "clean:dist", "copy:dist"]);

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};