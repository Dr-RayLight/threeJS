import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

let camera, scene, renderer;

init();
render();

function init() {

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(1.5, 4, 9);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf6eedc);

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    loader.setPath('./models/gltf/AVIFTest/');
    loader.load('forest_house.glb', function (gltf) {

        scene.add(gltf.scene);
        render();

    });

    renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        preserveDrawingBuffer: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.addEventListener('change', render);
    controls.target.set(0, 2, 0);
    controls.update();

    window.addEventListener('resize', onWindowResize);

}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
    render();

}

function render() {
    renderer.render(scene, camera);
}

function screenshots() {
    var imgData, imgNode;

    try {
        var strMime = "image/jpeg";
        var strDownloadMime = "image/octet-stream";

        imgData = renderer.domElement.toDataURL(strMime);

        saveFile(imgData.replace(strMime, strDownloadMime), "wiggle3D_screenshots.jpg");

    } catch (e) {
        console.log(e);
        return;
    }

}

var saveFile = function (strData, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        document.body.appendChild(link); //Firefox requires the link to be in the body
        link.download = filename;
        link.href = strData;
        link.click();
        document.body.removeChild(link); //remove the link when done
    } else {
        location.replace(uri);
    }
}