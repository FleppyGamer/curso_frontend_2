const gulp = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass")(require("sass"));
const uglify = require("gulp-uglify");
const imgmin = require("gulp-imagemin");


function compileSass(){
    return gulp.src("./source/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed",
        }))
        .pipe(sourcemaps.write("./maps"))
        .pipe(gulp.dest("./build/styles"))
}

function compressJs(){
    return gulp.src("./source/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./build/scripts"))                       
}

function compressImgs(){
    return gulp.src("./source/images/*")
        .pipe(imgmin())
        .pipe(gulp.dest("./build/images"))
}

exports.default = function(){
    gulp.watch("./source/styles/*.scss", {ignoreInitial: false}, gulp.parallel(compileSass))
    gulp.watch("./source/scripts/*.js", {ignoreInitial: false}, gulp.parallel(compressJs))
    gulp.watch("./source/images/*", {ignoreInitial: false}, gulp.parallel(compressImgs))
}

exports.compSass = compileSass;
exports.compJs = compressImgs;
exports.compImgs = compressImgs;