var gulp = require('gulp'),
	gulputil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	concat = require('gulp-concat'),
	browserify = require('gulp-browserify'),
	compass = require('gulp-compass'),

	coffeeSources = ['components/coffee/tagline.coffee'],
	jsSources = [
	'components/scripts/pixgrid.js',
	'components/scripts/rclick.js',
	'components/scripts/tagline.js',
	'components/scripts/template.js'
	],
	sassSources = ['components/sass/style.scss'];



// Tasks


// Compile Coffee Script 
gulp.task('coffee', function() {

	gulp.src(coffeeSources)
	.pipe(coffee({ bare:true }).on('error',gulputil.log))
	.pipe(gulp.dest('components/scripts'));

});


// Concat js files in one script and add browserify to include jquery and mustache libraries
gulp.task('js', function() { 

	gulp.src(jsSources)
	.pipe(concat('script.js'))
	.pipe(browserify())
	.pipe(gulp.dest('builds/development/js/'));

});


// Sass
gulp.task('sass', function() {

	gulp.src(sassSources)
	.pipe(compass({
		css: 'builds/development/css',
	    image: 'builds/development/images',
	    sass: 'components/sass',
	    style: 'expanded'
	    }))
	//.pipe(gulp.dest('builds/development/css'));

});