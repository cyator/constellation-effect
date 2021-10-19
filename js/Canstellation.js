import Particle from './particle.js';

export default class CanstellationEffect {
	#ctx;
	#width;
	#height;
	#particleArray;

	constructor(ctx, width, height) {
		this.#ctx = ctx;
		this.#width = width;
		this.#height = height;
		this.#particleArray = [];
		this.hue = 0;
		this.interval = 1000 / 60;
		this.timer = 0;
		this.lastTime = 0;
	}

	update(mouse) {
		this.#particleArray.push(new Particle(mouse, this.hue));
	}

	#handleParticles() {
		for (let i = 0; i < this.#particleArray.length; i++) {
			this.#particleArray[i].update();
			this.#particleArray[i].draw(this.#ctx);
			for (let j = i; j < this.#particleArray.length; j++) {
				// pythagoras theorem
				const dx = this.#particleArray[i].x - this.#particleArray[j].x;
				const dy = this.#particleArray[i].y - this.#particleArray[j].y;
				const distance = dx * dx + dy * dy;
				if (distance < 10000) {
					this.#ctx.beginPath();
					this.#ctx.strokeStyle = this.#particleArray[i].color;
					this.#ctx.lineWidth = 0.5;
					this.#ctx.moveTo(this.#particleArray[i].x, this.#particleArray[i].y);
					this.#ctx.lineTo(this.#particleArray[j].x, this.#particleArray[j].y);
					this.#ctx.stroke();
					this.#ctx.closePath();
				}
			}
			if (this.#particleArray[i].size <= 0.3) {
				this.#particleArray = this.#particleArray.filter(
					(e, index) => index !== i
				);
				i--;
			}
		}
	}

	animate = (timeStamp) => {
		const deltaTime = timeStamp - this.lastTime;
		this.lastTime = timeStamp;
		if (this.timer > this.interval) {
			this.#ctx.fillStyle = 'rgba(0,0,0,0.02)';
			this.#ctx.fillRect(0, 0, this.#width, this.#height);
			this.#handleParticles();
			this.hue += 0.5;
		} else {
			this.timer += deltaTime;
		}
		let canstellation = requestAnimationFrame(this.animate);
		return canstellation;
	};
}
