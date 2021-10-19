import { handleParticles } from './handleParticles.js';
import Particle from './particle.js';

let canvas;
let ctx;
let particleArray = [];
let hue = 0;
let interval = 1000 / 60;
let timer = 0;
let lastTime = 0;
let canstellation;

const mouse = {
	x: undefined,
	y: undefined,
};

window.onload = () => {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	animate(0);
};

window.addEventListener('resize', () => {
	cancelAnimationFrame(canstellation);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	animate(0);
});

window.addEventListener('click', (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
	for (let i = 0; i < 2; i++) {
		particleArray.push(new Particle(mouse, hue));
	}
});

window.addEventListener('mousemove', (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
	for (let i = 0; i < 2; i++) {
		particleArray.push(new Particle(mouse, hue));
	}
});

function animate(timeStamp) {
	const deltaTime = timeStamp - lastTime;
	lastTime = timeStamp;
	if (timer > interval) {
		ctx.fillStyle = 'rgba(0,0,0,0.02)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		handleParticles(particleArray, ctx);
		hue += 0.5;
	} else {
		timer += deltaTime;
	}
	canstellation = requestAnimationFrame(animate);
}
