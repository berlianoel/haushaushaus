const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('threejs-canvas').appendChild(renderer.domElement);

const textureLoader = new THREE.TextureLoader();
const demonTexture = textureLoader.load('/public/assets/demon-king.png');

const demonGeometry = new THREE.PlaneGeometry(5, 5);
const demonMaterial = new THREE.MeshBasicMaterial({ map: demonTexture, transparent: true });
const demonMesh = new THREE.Mesh(demonGeometry, demonMaterial);
scene.add(demonMesh);

camera.position.z = 10;

function animate() {
    requestAnimationFrame(animate);
    demonMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
