const gulp = require('gulp'),
	  cssnano = require('gulp-cssnano'),
	  rename = require('gulp-rename'),
	  imagemin = require('gulp-imagemin'),
	  sass = require('gulp-sass');
		
	//创建并发布任务
	gulp.task('sass',function(){
		return gulp.src('./src/css/*.scss').pipe(sass()).pipe(rename({'suffix':'.min'})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('img',function(){
		return gulp.src('./src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'));
	})
	gulp.task('img2',function(){
		return gulp.src('./src/img2/*').pipe(imagemin()).pipe(gulp.dest('dist/img2'));
	})
	gulp.task('default',function(){
		gulp.watch('./src/css/*.scss',['sass']);
	})
	gulp.task('img4',function(){
		return gulp.src('./src/img4/*').pipe(imagemin()).pipe(gulp.dest('dist/img4'));
	})
	gulp.task('img5',function(){
		return gulp.src('./src/img5/*').pipe(imagemin()).pipe(gulp.dest('dist/img5'));
	})