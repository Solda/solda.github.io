var gulp=require("gulp");gulp.task("default",function(){var e=require("gulp-postcss"),r=require("gulp-sourcemaps"),p=require("autoprefixer-core");return gulp.src("./css-prefix/*.css").pipe(r.init()).pipe(e([p({browsers:["last 2 versions"]})])).pipe(r.write(".")).pipe(gulp.dest("./css"))});