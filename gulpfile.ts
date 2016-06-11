import * as gulp from 'gulp';
import * as runSequence from 'run-sequence';

import loadTasks from './gulp/load-tasks';

loadTasks('./gulp/tasks');

gulp.task('build.lib', (done) => runSequence(
    'lib',
    done
));

gulp.task('build.html', (done) => runSequence(
    'html',
    done
));

gulp.task('build', (done) => runSequence(
    'build.lib',
    'build.html',
    done
));

