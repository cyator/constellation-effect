export default class Particle {
	constructor(mouse, hue) {
		this.x = mouse.x;
		this.y = mouse.y;
		this.size = Math.random() * 15 + 1;
		this.speed = {
			x: Math.random() * 3 - 1.5,
			y: Math.random() * 3 - 1.5,
		};
		this.color = `hsl(${hue},100%,50%)`;
	}
	update() {
		this.x += this.speed.x;
		this.y += this.speed.y;
		if (this.size > 0.2) this.size -= 0.1;
	}
	draw(ctx) {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
		ctx.fill();
	}
}
