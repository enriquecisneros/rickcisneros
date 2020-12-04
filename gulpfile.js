var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	connect = require('gulp-connect');
// function error log
	function errorLog(error){
		console.error.bind(error);
		this.emit('end'); 
	}
// sever task
//connect
gulp.task('connect', function() {
  connect.server({
    root: '',
    livereload: true
  });
});
// html task
gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});
// scripts task
// uglifies
gulp.task('scripts', function(){
	gulp.src('dev-js/*.js')
	.pipe(uglify())
	.on('error', errorLog)
	.pipe(gulp.dest('js/'));
});
// styles task
// sass
gulp.task('styles', function() {
 return sass('css/*.scss', {
  style: 'compressed'
 })
 	.on('error',errorLog)
  	.pipe(gulp.dest('css'))
  	.pipe(connect.reload());

});﻿

// watch
// watch JS 
gulp.task('watch',function() {
	
	gulp.watch(['*.html'], ['html']);

	gulp.watch('dev-js/*.js', ['scripts']);
	gulp.watch('css/*.scss', ['styles']);

});



gulp.task('default', ['scripts','styles', 'connect','watch']);