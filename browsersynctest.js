"use strict";

var browserSync = require("browser-sync").create();

browserSync.init({
    files: ["app/browsersynctest.html"],
    server: {
        baseDir: "app"
    },
    https: true
});