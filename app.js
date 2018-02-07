/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START app]
//var mysql = require('mysql');
const express = require('express');
//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var data,namear =[];
const app = express();
var fs = require('fs');
var THREE = require('three');
//var StlReader = require('stl-reader');
var StlExporter = require('./js/StlExporter.js');
var NodeStl = require('./js/nodestl.js');
//var bodyParser = require('body-parser');
//var MockBrowser = require('mock-browser').mocks.MockBrowser;
//var mock = new MockBrowser();
//var document = MockBrowser.createDocument();
//var window = MockBrowser.createWindow();
console.log(NodeStl);
var Volume = 0;
//REST API
//var express     = require('express');      
//var app         = express();    
//var bodyParser  = require('body-parser');
var router = express.Router();
var stl;
//var gl = require('gl')(1,1); //headless-gl
var model = 'https://myindustryworld.com/z/designs/100000027files/10000002720180202Super_Mario_Question_Block_Switch_Case.stl';
/*var stl = NodeStl(model);
console.log(stl.volume + 'cm^3');     // 21cm^3
console.log(stl.weight + 'gm');       //  1gm
//console.log(stl.Geometry );       //  1gm
console.log(stl.boundingBox,'(mm)');

*/
function toArrayBuffer(buffer) {
  var ab = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(ab);
  for (var i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return ab;
}
function saveSTL( scene, name ){  
  var exporter = new StlExporter();
  var stlString = exporter.parse( scene );
 console.log('stl= '+stlString);
 fs.writeFile(name, stlString, (err) => {
  if (err) throw err;
  console.log('The STL file has been saved!');
});
  //var blob = new Blob([stlString], {type: 'text/plain'});
  
  //saveAs(blob, name + '.stl');
}

///////////////////////////////////////////////////////
var request = require('request');
var requestSettings = {
   method: 'GET',
   url: model,
   encoding: null,
};
request(requestSettings, function(error, response, body) {
    stl = new NodeStl(body);
	console.log('volume '+stl.volume);
	//console.log('body '+body);
	Volume = stl.volume;
	//response.send({vol: Volume});
    //assert.equal(stl.volume, 21.87511539650792);
   // done(null);
});

////////////////////////////////////////////////////////////////////////////
//var STLLoader = require('three-stl-loader')(THREE)
//  var loader = new STLLoader();
 
/*loader.load('https://myindustryworld.com/z/designs/15files/1520171004oo.stl', function (geometry) {
	console.log('stl Loaded...');
  var materialz = new THREE.MeshNormalMaterial()
  var meshz = new THREE.Mesh(geometry, materialz)
  scene.add(meshz)
})*/
//var STLLoader = require('./js/stlload.js');
var volume = require('./js/volume.js');
var Mesh;
//function listFiles(bucketName) {
  // [START storage_list_files]
  // Imports the Google Cloud client library
   var camera, scene, renderer,
            geometry, material, mesh, light1, stats,controls,quantity = 1;
scene = new THREE.Scene();
var filen = "testt.txt"
fs.writeFile(filen, "ZEESHAN Ahmad khan", function(err) {
    

    console.log("The file was saved!");
}); 
function vl(){
var geom = new THREE.CubeGeometry( 200, 200, 200 );
var geom1 = new THREE.SphereGeometry( 300 );
 var material = new THREE.MeshNormalMaterial();
  var mesh = new THREE.Mesh(geom, material);
  var mesh2 = new THREE.Mesh(geom1, material);
 var mymesh =  new THREE.Mesh(stl.Geometry, material);
  console.log(geom);
  console.log(geom1);
 Mesh = geom1;
  scene.add(mesh);
  scene.add(mesh2);
  scene.add(mymesh);
  var vol = volume.calculateVolume(mesh2);
  var vol2 = volume.calculateVolume(mesh);
  var tvol = vol + vol2;
  //saveSTL( scene, 'new.stl' );
console.log(vol);
return tvol;
 // var renderer = new THREE.WebGLRenderer({context:gl});
}
fs.readFile("cube.stl",  "utf8", function(err, data) {if(err) {       return console.log(err);    }console.log('data= ');});
app.get('/download', function(req, res){
  var file = __dirname + '/new.stl';
   res.sendFile(file);
  //res.download(file); // Set disposition and send it.
});
app.get('/', (req, res,body) => {
/*stl = new NodeStl(body);
	console.log(stl.volume);
	Volume = stl.volume;
	console.log(Volume);
	res.jsonp({vol: Volume});*/
/*	res.setHeader('Content-Type', 'text/html');
 res.write('<h1> MIW</h1>');
 res.write('<h2> Welcome to My Industry World App</h2>');
 res.send("zee");*/
  //send multiple responses to the client
  var obj = { name: "Zeeshan"};
  //var vval = vl();
 // var geom = new THREE.CubeGeometry( 200, 200, 200 );
  var objj = [{a: 4, b: 6},{doc: "sss"}];
  console.log(objj);
  //console.log(stl);
// res.jsonp({volume: Volume});
  //res.jsonp({ name: "Zeeshan"})
  //res.status(200).send(namear).end();
});
var vec3 = new THREE.Vector3(2,3,4);
console.log(vec3.x);

camera = new THREE.Camera( 70,1, 1, 1000 );
 
 var directionalLight = new THREE.DirectionalLight( 0xffffff ,1.4);
                directionalLight.position.set(0.3,-1,0.8);

var material = new THREE.MeshPhongMaterial({  overdraw:true,color: 0x333355,specular:0xffffff,bumpScale : 0.1,shininess: 0.1,
						reflectivity: 0.01, shading: THREE.FlatShading
						                    });

//mesh = new THREE.Mesh( geom,material);              scene.add(mesh);

var param = function(geo){console.log("param loaded..");
var cube = new THREE.Mesh( geo, new THREE.MeshNormalMaterial() );
scene.add(cube);
StlExporter.saveSTL(scene,"temp.stl");
console.log("param loaded..");
//renderer = new THREE.WebGLRenderer({antialias: true,preserveDrawingBuffer: true});
//console.log(renderer.domElement);
var vol = volume.calculateVolume(cube);
console.log(vol);
};
var file = 'https://myindustryworld.com/z/designs/15files/1520171004oo.stl';

 function animate() {
                 
                requestAnimationFrame( animate );
                render();
                     }
 function render() {
	 
 }



/*for (var i =0; i <= namear.length; i++) {
    res.write('<h3> User'+i+': ' + namear[i] + '</h3>');
  }*/
// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
