module.exports = function(conf) {
    conf.set({
        basePath: "./",
        frameworks: ["jspm","jasmine"],
        reporters: ["dots"],
        browsers: ["Electron"],

        // these are default values anyway
        singleRun: true,
        colors: true,
        files: [{ pattern: './karma.requirepatch.js', included: true, served: true}],
        jspm : {
        	loadFiles: ['app/**/*.js', 'spec/**/*.js']
        },
        logLevel: conf.LOG_INFO
    });
};