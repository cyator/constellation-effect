import { handleParticles } from './handleParticles.js';
import Particle from './particle.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let particleArray = [];
let hue = 0;

window.addEventListener('resize', function () {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

const mouse = {
	x: undefined,
	y: undefined,
};

canvas.addEventListener('click', (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
	for (let i = 0; i < 2; i++) {
		particleArray.push(new Particle(mouse, hue));
	}
});

canvas.addEventListener('mousemove', (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
	for (let i = 0; i < 2; i++) {
		particleArray.push(new Particle(mouse, hue));
	}
});

function animate() {
	ctx.fillStyle = 'rgba(0,0,0,0.02)';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	handleParticles(particleArray, ctx);
	hue += 0.5;
	requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
