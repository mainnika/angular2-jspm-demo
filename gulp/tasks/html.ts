import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins: any = gulpLoadPlugins();

export = () => {

    let pug: any = plugins.pug({
        pretty: true,
        pug: require('pug')
    });

    return gulp
        .src([
            'pug/**/*.pug'
        ])
        .pipe(pug)
        .pipe(gulp.dest('dist'));
}