import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';

const plugins: any = gulpLoadPlugins();

export = () => {

    let tscProject: any = plugins.typescript.createProject('tsconfig.json', {
        typescript: require('typescript')
    });

    return gulp
        .src([
            'typings/index.d.ts',
            'lib/**/*.ts',
        ])
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.typescript(tscProject))
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('dist/lib'));
}