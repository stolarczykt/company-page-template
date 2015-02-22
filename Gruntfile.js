module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: {
				options: {
					paths: ["less/"]
				},
				files: {
					"resources/css/default.css": "less/colors/default.less",
					"resources/css/yellow-and-black.css": "less/colors/yellow-and-black.less"

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