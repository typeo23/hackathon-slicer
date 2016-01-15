'use strict';
let parseSTL = require('parse-stl');
let viewPort = require('./viewport.js');

module.exports = loadModel;

function loadModel(STLasArrayBuffer) {
    let buf = new Buffer(STLasArrayBuffer);
    let mesh = parseSTL(buf);
    viewPort.loadMesh(mesh);
}
