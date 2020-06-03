const sass = require("gulp-sass");
const gulp = require("gulp");
const uglify = require("gulp-terser");
const env = "production";

gulp.task("uglify", function() {
  return gulp.src("src/js/*.js")
      .pipe(uglify())
      .pipe(gulp.dest("dist/js"))
});

gulp.task("sass", function() {
  const config = {};

  if(env === "production") {
    config.outputStyle = "compressed";
  }

  return gulp.src("src/sass/main.scss")
      .pipe(sass(config))
      .pipe(gulp.dest("dist/css"));
});