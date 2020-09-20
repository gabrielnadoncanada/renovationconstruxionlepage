var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix  = require("gulp-autoprefixer");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var concatCss = require('gulp-concat-css');

gulp.task('sass', function(){
   return gulp.src('assets/scss/**/*.scss')
       .pipe(sourcemaps.init())
       .pipe(sass({outputStyle: 'compressed'}))
       .on('error', function(err){
        browserSync.notify(err.message, 15000);
        this.emit('end');
    })
       .pipe(autoprefix())
       .pipe(sourcemaps.write('./'))
       .pipe(gulp.dest('assets/css'))
       .pipe(browserSync.reload({stream: true}));

});

gulp.task('watch', function(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
 
    gulp.watch('assets/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('assets/js/**/*.js').on('change', browserSync.reload);
 })


gulp.task('default', function () {
    return gulp.src('assets/**/*.css')
        .pipe(concatCss("assets/style.css"))
        .pipe(gulp.dest('./'));
});
