const sass = require("gulp-sass")(require("sass"));

function compileSass(){
    return gulp.src("./source/styles/main.scss")
    .pipe(sass({
        outputStyle: "compressed",
    }))
    .pipe(gulp.dest("./build/styles"));
}

function compressJs(){
    return gulp.src("./source/scripts/*.js")
}