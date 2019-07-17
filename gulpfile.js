// Подключаем плагины Gulp
var gulp = require("gulp"),	
	sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    concat = require("gulp-concat"),
    rename = require("gulp-rename");

// Объединение, компиляция Sass в CSS, простановка венд. префиксов и дальнейшая минимизация кода
gulp.task("sass", function() {
    return gulp.src("src/sass/*.sass")
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
         }))
        .pipe(gulp.dest("dist/css"));
});

gulp.task("scripts", function() {
    return gulp.src("src/js/*.js")
        .pipe(gulp.dest("dist/js"));
});

// Сжимаем картинки
gulp.task('imgs', function() {
    return gulp.src("src/images/*.+(jpg|jpeg|png|gif)")
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images"))
});

// Задача слежения за измененными файлами
gulp.task("watch", function() {
    gulp.watch("src/sass/*.sass", ["sass"]);
    gulp.watch("src/js/*.js", ["scripts"]);
    gulp.watch("src/images/*.+(jpg|jpeg|png|gif)", ["imgs"]);
});

// Запуск тасков по умолчанию
gulp.task("default", ["sass", "scripts", "imgs", "watch"]);