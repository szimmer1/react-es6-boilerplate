var jsSrc = 'src/**/*.js',
    jsxSrc = 'src/**/*.jsx',
    html = '**/*.html';

module.exports = {
    jsSrcGlob: jsSrc,
    jsxSrcGlob: jsxSrc,
    htmlSrc: html,
    jsEntryFile: 'js/app.js',
    jsDest: 'js',
    jsDist: 'dist',
    jsDistFile: 'bundle.js',
    allSrc: [jsSrc, jsxSrc, html]
};