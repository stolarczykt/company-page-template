module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					paths: ["less/"]
				},
				files: {
					"resources/css/blue-and-white.css": "less/colors/blue-and-white.less",
					"resources/css/yellow-and-black.css": "less/colors/yellow-and-black.less",
					"resources/css/aqua-and-dark-blue.css": "less/colors/aqua-and-dark-blue.less",
					"resources/css/aqua-and-black.css": "less/colors/aqua-and-black.less",
					"resources/css/green-and-dark-blue.css": "less/colors/green-and-dark-blue.less",
					"resources/css/pink-and-grey.css": "less/colors/pink-and-grey.less",
					"resources/css/brown-and-beige.css": "less/colors/brown-and-beige.less",
					"resources/css/grey-and-cobalt.css": "less/colors/grey-and-cobalt.less"

				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			less: {
				files: ['less/*.less', 'less/colors/*.less'],
				tasks: ['less:development']
			},
			js: {
				files: ['resources/js/*.js'],
				files: ['resources/vendor/*.js']
			},
			html: {
				files: ['*.html']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};