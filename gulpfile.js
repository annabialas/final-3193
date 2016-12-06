var gulp          = require('gulp'),
    browserSync   = require('browser-sync').create(),
    sass          = require('gulp-sass'),
    nodemon 	  = require('gulp-nodemon');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["./**/*.*"],
        browser: "google chrome",
        port: 7000,
	});

    gulp.watch("./sass/*.scss", ['sass']);
    gulp.watch("./views/*.handlebars").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./public/css"))
        .pipe(browserSync.stream());
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'index.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('default', ['serve', 'nodemon']);
