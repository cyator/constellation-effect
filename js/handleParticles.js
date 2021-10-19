export function handleParticles(particleArray, ctx) {
	for (let i = 0; i < particleArray.length; i++) {
		particleArray[i].update();
		particleArray[i].draw(ctx);
		for (let j = i; j < particleArray.length; j++) {
			// pythagoras theorem
			const dx = particleArray[i].x - particleArray[j].x;
			const dy = particleArray[i].y - particleArray[j].y;
			const distance = dx * dx + dy * dy;
			if (distance < 10000) {
				ctx.beginPath();
				ctx.strokeStyle = particleArray[i].color;
				ctx.lineWidth = 0.5;
				ctx.moveTo(particleArray[i].x, particleArray[i].y);
				ctx.lineTo(particleArray[j].x, particleArray[j].y);
				ctx.stroke();
				ctx.closePath();
			}
		}
		if (particleArray[i].size <= 0.3) {
			particleArray = particleArray.filter((e, index) => index !== i);
			i--;
		}
	}
}
