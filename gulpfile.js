var gulp = require('gulp'),
	gulputil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	coffeescripts = ['components/coffee/tagline.coffee'];


gulp.task('coffee', function() {

	gulp.src(coffeescripts)
	.pipe(coffee({ bare:true }).on('error',gulputil.log))
	.pipe(gulp.dest('components/scripts'));

});