import {glob} from 'glob';
import concat from 'concat-files';

// Need to specify directory of files (e.g. which story dir?)

// So before this happens, 1) someone creates new dir. 2) someone uploads all the requisite files to that dir. 3) someone runs this script. 4) this script is disabled for that story. 5) Someone can listen to the new merged file. 6) Someone can add annotations to that file (probably just an xml or JSON file) generated via some UI.

glob('./*all-merged*', function(er, files) {
    if (files.length >= 1) {
        // TODO: throw another error to the web UI or whatever.
        // console.log('Got all-merged already! Exit!');
    } else {
        glob('./**/*.ogg', function(er, files) {
            console.log('Got ogg files, merging!', files);

            // Merge all the ogg files into one.
            concat(files, 'all-merged.tmp');
        });
        // TODO redirect to complete action page.
    }
})

