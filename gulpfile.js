var gulp = require('gulp');
var sass = require('gulp-sass');
// var r = require('tiny-lr')
// var refresh = require('gulp-livereload')
// var nodemon = require('gulp-nodemon')
// var wait = require('../gulp-wait')
// var server = lr();

gulp.task('styles', function() {
    gulp.src('./sass/app.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css/'))
});


gulp.task('watch',function() {
    gulp.watch('./sass/**/*.scss',['styles']);
});



// gulp.task('dev', function () {
 
//     gulp.src('./index.js')
//       .pipe(nodemon());
   
//     server.listen(35729, function (err) {
   
//         if (err) return console.log(err);
   
//         gulp.watch('./app/views/**/*.html', function (e) {
//         gulp.src(e.path)
//           .pipe(wait(1500))
//           .pipe(refresh(server));
//       });
   
//     });
   
//   })

