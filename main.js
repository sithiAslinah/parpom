const table = [
    "Fitrina",20,"F", 1, 1,
    "Hossain",19,"M", 18, 1,
    "Hossain",19,"M", 1, 2,
    "Khalid",20,"M",2, 2,
    "Sns",30,"M",13, 2,
    "Dwivedi",24,"M", 14, 2,
    "CanVaas",25,"M",15, 2,
    "Fatimah",26,"F", 16, 2,
    "Noel",23,"M",17, 2,
    "Erna",24,"F",18, 2,
    "Kader",28,"M",1, 3,
    "Alias",19,"M",2, 3,
    "Iffah",28,"F", 13, 3,
    "Osama",18,"M",14, 3,
    "Noorul",19,"F",15, 3,
    "Mohd",20,"M",16, 3,
    "Kishore",28,"M",17, 3,
    "Nathan",24,"M",18, 3,
    " Ajar",23,"M",1, 4,
    "Raman",25,"M", 2, 4,
    "JeganA",25,"M",3, 4,
    "Rahul",24,"M",4, 4,
    "DanuSha",28,"F",5, 4,
    "Gaoura",23,"M",6, 4,
    "Azizan",23,"M",7, 4,
    "Ainur",23,"F",8, 4,
    "Afiq",25,"M",9, 4,
    "Dawood",28,"M",10, 4,
    "Rifayat",30,"M", 11, 4,
    "Nalla",19,"M", 12, 4,
    "Najulah",19,"F",13, 4,
    "Krish",20,"M", 14, 4,
    "Hajji",30,"M", 15, 4,
    "Taylor",40,"F", 16, 4,
    "Ashini",18,"F",17, 4,
    "Yunus",19,"M",18,4,
    "Mehrose",20,"M", 1,5,
    "sree",19,"F", 2,5,
    "Nazir",29,"M", 3,5,
   "Nazir",29,"M", 4, 5,
    "Najulah",19,"F", 5, 5,
    "Taylor",40,"F", 6, 5,
    "Nazir",29,"M", 7, 5,
    "Alias",19,"M", 8, 5,
    "Najulah",19,"F", 9, 5,
    "Yunus",19,"M", 10, 5,
    "Alias",19,"M", 11, 5,
    "Nazir",29,"M", 12, 5,
    "Taylor",40,"F", 13, 5,
    "Alias",19,"M", 14, 5,
    "Najulah",19,"F", 15, 5,
    "Alias",19,"M", 16, 5,
    "Nazir",29,"M", 17, 5,
    "Alias",19,"M", 18, 5,
    "Najulah",19,"F", 1, 6,
    "Alias",19,"M", 2, 6,
    "Nazir",29,"M", 4, 6,
    "Yunus",19,"M", 5, 6,
    "Alias",19,"M", 6, 6,
    "Taylor",40,"F", 7, 6,
    "Yunus",19,"M", 8, 6,
    "Najulah",19,"F", 9, 6,
    "Yunus",19,"M", 18, 6,
    "DanuSha",28,"F", 1, 6,
    "Nazir",29,"M", 4, 6,
    "Yunus",19,"M", 12, 6,
    "DanuSha",28,"F", 13,6,
    "Najulah",19,"F", 14, 6,
    "Yunus",19,"M", 15, 6,
    "Taylor",40,"F", 16, 6,
    "DanuSha",28,"F", 17, 6,
    "Nazir",29,"M", 18, 6,
    "Yunus",19,"M", 4, 6,
    "Taylor",40,"F", 5, 6,
    "DanuSha",28,"F", 18, 7,
   "Nazir",29,"M", 17, 7,
    "Alias",19,"M", 16, 7,
    "Taylor",40,"F", 15, 7,
    "Yunus",19,"M", 14, 7,
    "Taylor",40,"F", 13, 7,
    "DanuSha",28,"F", 12, 7,
    "Nazir",29,"M", 11, 7,
    "Alias",19,"M", 10, 7,
    "Yunus",19,"M", 9, 7,
    "Nazir",29,"M", 8, 7,
    "DanuSha",28,"F", 10, 6,
    "Nazir",29,"M", 11, 6
];

let camera, scene, renderer, controls, composer;
var hblur, vblur;
let targets = {simple: [], table: [], sphere: [], helix: [], grid: []};

init();
animate();

function init() {

    initCamera();

    initScene();

    initObjects();

    addClickListeners();

    initRenderer();

    initTrackbarControls();

    transform(targets.table, 2000);

    window.addEventListener('resize', onWindowResize, false);

}

function initCamera() {

    camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.z = 3000;

}

function initScene() {

    scene = new THREE.Scene();

}

function initRenderer() {

    renderer = new THREE.CSS3DRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);
}

function initObjects() {

    simpleObjectsLayout();
    generateGeometricLayouts();

}

function addClickListeners() {

    addClickListener(targets.table, 'table');
    addClickListener(targets.sphere, 'sphere');
    addClickListener(targets.helix, 'helix');
    addClickListener(targets.grid, 'grid');

}

function simpleObjectsLayout() {

    for (let i = 0; i < table.length; i += 5) {

        let object = new THREE.CSS3DObject(htmlElement(table, i));
        object.position.x = Math.random() * 6000 - 2000;
        object.position.y = Math.random() * 6000 - 2000;
        object.position.z = Math.random() * 6000 - 2000;

        scene.add(object);
        targets.simple.push(object);
        tableLayout(table, i);

    }

}

    function htmlElement(table, i,x) {
    let element = document.createElement('div');
    element.className = 'element';
    element.style.backgroundColor ='rgba(0,181,204,' + (Math.random() * 0.6 + 0.25) + ')';
    let number = document.createElement('div');
    number.className = 'number';
    number.textContent = (i / 5) + 1;
    element.appendChild(number);

    let symbol = document.createElement('div');
    symbol.className = 'symbol';
    symbol.textContent = table[i];
    element.appendChild(symbol);

    let details = document.createElement('div');
    details.className = 'details';
    details.innerHTML = 'Age:' + table[i + 1] + '<br>' + table[i + 2];
    if(table[i + 2] == 'F'){
    element.style.backgroundColor = 'rgba(255,0,255,' + (Math.random() * 1 + 0.45) + ')';
    }
    element.appendChild(details);

    element.addEventListener('click', ()=>elementClickHandler(i), false);
    if(x == 'sphere'){
        element.style.backgroundColor='yellow';
    }
    return element;
}

function elementClickHandler(i){

    transform(targets.table,1000);

    new TWEEN.Tween(targets.simple[i / 5].position)
        .to({
            x: 0,
            y: 0,
            z: 2500
        }, Math.random() * 2000 + 2000)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

    new TWEEN.Tween(this)
        .to({}, 2000 * 2)
        .onUpdate(render)
        .start();
}

function tableLayout(table, index) {

    let object = new THREE.Object3D();

    object.position.x = (table[index + 3] * 240) - 2250;
    object.position.y = -(table[index + 4]* 260) + 1220;
    targets.table.push(object);

}

function addClickListener(target, elementId) {

    const button = document.getElementById(elementId);

    button.addEventListener('click', function () {
        transform(target, 2000);
        htmlElement(table,i,elementId);
    }, false);

}

function initTrackbarControls() {
    controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.rotateSpeed = 0.5;
    controls.minDistance = 500;
    controls.maxDistance = 6000;
    controls.addEventListener('change', render);
}

function generateGeometricLayouts() {

    let sphereVector = new THREE.Vector3();
    let helixVector = new THREE.Vector3();

    for (let i = 0, l = targets.simple.length; i < l; i++) {
        addSphereObject(sphereVector, i, l);
        addHelixObject(helixVector, i);
        addGridObject(i);
    }

}

function addSphereObject(sphereVector, index, length) {

    const phi = Math.acos(-1 + (2 * index) / length);
    const theta = Math.sqrt(length * Math.PI) * phi;
    let object = new THREE.Object3D();
    object.position.setFromSphericalCoords(800, phi, theta);

    sphereVector.copy(object.position).multiplyScalar(2);

    object.lookAt(sphereVector);
    targets.sphere.push(object);

}

function addHelixObject(helixVector, index) {

    const theta = index * 0.175 + Math.PI;
    const y = -(index * 8) + 450;
    let object = new THREE.Object3D();

    object.position.setFromCylindricalCoords(900, theta, y);

    helixVector.x = object.position.x * 2;
    helixVector.y = object.position.y;
    helixVector.z = object.position.z * 2;

    object.lookAt(helixVector);

    targets.helix.push(object);
}

function addGridObject(index) {

    let object = new THREE.Object3D();
    object.position.x = ((index % 5) * 400) - 800;
    object.position.y = (-(Math.floor(index / 5) % 5) * 400) + 800;
    object.position.z = (Math.floor(index / 25)) * 1000 - 2000;
    targets.grid.push(object);

}

function transform(target, duration) {

    TWEEN.removeAll();

    for (let i = 0; i < targets.simple.length; i++) {
        let object = targets.simple[i];
        let targetObject = target[i];
        transformObjectPosition(object, targetObject, duration);
        transformObjectRotation(object, targetObject, duration);
    }

    new TWEEN.Tween(this)
        .to({}, duration * 2)
        .onUpdate(render)
        .start();

}

function transformObjectPosition(object, targetObject, duration) {

    new TWEEN.Tween(object.position)
        .to({
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

}

function transformObjectRotation(object, targetObject, duration) {

    new TWEEN.Tween(object.rotation)
        .to({
            x: targetObject.rotation.x,
            y: targetObject.rotation.y,
            z: targetObject.rotation.z
        }, Math.random() * duration + duration)
        .easing(TWEEN.Easing.Exponential.InOut)
        .start();

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

function animate() {

    requestAnimationFrame(animate);
    TWEEN.update();
    controls.update();
    composer.render();
}
