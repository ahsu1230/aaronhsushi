"use strict";
var args = require("yargs").argv;
var babel = require("gulp-babel");
var browserSync = require("browser-sync").create();
var concat = require("gulp-concat");
var del = require("del");
var gulp = require("gulp");
var gulpif = require("gulp-if");
var order = require("gulp-order");
var pug = require("gulp-pug");
var runSequence = require("run-sequence");
var stylus = require("gulp-stylus");
var uglify = require("gulp-uglify");

var release = args.release ? true : false; // (gulp --release)

var buildFolder = "build";
var jsxFolder = "src/jsx/**/*.jsx";
var pugFolder = "src/**/*.pug"
var stylFolder = "src/**/*.styl";
	
gulp.task("clean", function() {
	return del.sync(buildFolder);
});

gulp.task("stylus", function() {
  return gulp.src(stylFolder)
    .pipe(stylus({
        "include css": true
    }))
    .pipe(concat("out.css"))
    .pipe(gulp.dest(buildFolder))
    .pipe(browserSync.reload({
      stream:true
    }));
});

gulp.task("pug", function() {
  return gulp.src(pugFolder)
    .pipe(pug())
    .pipe(gulp.dest(buildFolder))
    .pipe(browserSync.reload({
      stream:true
    }));
});

gulp.task("jsx", function(){
    return gulp.src(jsxFolder)
		.pipe(babel({
			presets: ["react"]
		}))
		.pipe(concat("main.js"))
        .pipe(gulp.dest(buildFolder + "/js"))
		.pipe(browserSync.reload({
			stream:true
		}));
});

gulp.task("libs", function() {
  return gulp.src("src/libs/**/*")
    .pipe(order([
      "jquery.js",
      "lodash.js"
    ]))
    .pipe(concat("libs.js"))
    .pipe(gulp.dest(buildFolder + "/libs"));
});

gulp.task("initBrowserSync", function() {
	browserSync.init({
		server: {
			baseDir: "build"
		},
	});
});

gulp.task("watch", function () {
	gulp.watch(jsxFolder, ["jsx"]);
	gulp.watch(pugFolder, ["pug"]);
	gulp.watch(stylFolder, ["stylus"]);
});

gulp.task("default", function() {
    runSequence("clean", "libs", "jsx", "pug", "stylus", "initBrowserSync", "watch");
});