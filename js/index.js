import CanstellationEffect from './Canstellation.js';

let canvas;
let ctx;
let canstellationAnimation;
let canstellationEffect;

const mouse = {
	x: undefined,
	y: undefined,
};

window.onload = () => {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canstellationEffect = new CanstellationEffect(
		ctx,
		canvas.width,
		canvas.height
	);
	canstellationAnimation = canstellationEffect.animate(0);
};

window.addEventListener('resize', () => {
	cancelAnimationFrame(canstellationAnimation);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canstellationEffect = new CanstellationEffect(
		ctx,
		canvas.width,
		canvas.height
	);
	canstellationEffect.animate(0);
});

window.addEventListener('click', (e) => {
	mouse.x = e.x;
	mouse.y = e.y;
	for (let i = 0; i < 2; i++) {
		canstellationEffect.update(mouse);
	}
});

window.addEventListener('mousemove', moveEventFunction);
window.addEventListener('touchmove', moveEventFunction);

function moveEventFunction(e) {
	mouse.x = e.x;
	mouse.y = e.y;
	for (let i = 0; i < 2; i++) {
		canstellationEffect.update(mouse);
	}
}
