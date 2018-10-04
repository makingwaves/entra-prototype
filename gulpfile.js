var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('src/components/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/components'))
  });

  gulp.task('watch', function(){
    //gulp.watch('src/components/**/*.scss', ['sass']);
    gulp.watch('src/components/**/*.scss', gulp.series('sass'))
    // Other watchers
  })

