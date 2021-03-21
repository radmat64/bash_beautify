import { task, dest, src } from 'gulp';
import { createProject } from 'gulp-typescript';
var tsProject = createProject('tsconfig.json');
var outDir = 'out';

task('default', function (callback) {
    tsProject.src()
        .pipe(tsProject())
        .js.pipe(dest(outDir));

    src('src/beautify_bash.py')
        .pipe(dest(outDir + '/src'));
    callback();
});