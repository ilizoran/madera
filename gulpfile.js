'use strict';

var gulp       = require('gulp'),
	sass         = require('gulp-sass'),
	maps         = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	livereload   = require('gulp-livereload'),
	postcss      = require('gulp-postcss'),
	notify       = require('gulp-notify'),
	lr           = require('tiny-lr'),
	server       = lr();

gulp.task('compileSass', function(){
	return gulp.src("scss/main.scss")
		.pipe(maps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: '> 5%'
		}))
		.pipe(maps.write('./'))
		.pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
	gulp.watch(['scss/*.scss'], ['compileSass']);
});

gulp.task('build', ['compileSass']);
gulp.task('default', ['watch']);
