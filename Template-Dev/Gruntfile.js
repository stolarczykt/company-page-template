module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
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
			development: {
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
				tasks: ['less:development']
			},
			//sass: {
			//	files: ['css-langs/sass/*.scss', 'css-langs/sass/colors/*.scss'],
			//	tasks: ['sass:development']
			//},
			js: {
				files: ['resources/js/*.js', 'resources/vendor/*.js']
			},
			html: {
				files: ['*.html']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
};