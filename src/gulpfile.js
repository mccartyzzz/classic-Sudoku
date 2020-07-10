const gulp = require("gulp");
const GulpClient = require("gulp");

//转译 Javascript
gulp.task("webpack", () => {
    const webpack = require("webpack-stream");
    //对webpack进行配置，一般文件名为webpack.config.js
    const config = require("./webpack.config.js");
    gulp.src("./js/**/*.js")
        .pipe(webpack(config))
        .pipe(gulp.dest("../www/js"));
});

//编译 less -> css
gulp.task("less", () => {
    const less = require("gulp-less");
    gulp.src("./less/*.less")
        .pipe(less())
        .pipe(gulp.dest("../www/css"));
});

gulp.task("default", ["webpack", "less"]);

gulp.task("watch", () => {
    gulp.watch("less/**/*.less", ["less"]);
    gulp.watch("js/**/*.js", ["webpack"]);
})