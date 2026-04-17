export default function noiseField(p) {
	p.setup = function () {
		const container = p.canvas.parentElement;
		p.createCanvas(container.offsetWidth, 400);
		p.background(15);
	};

	p.draw = function () {
		p.background(15, 25);
		for (let x = 0; x < p.width; x += 20) {
			for (let y = 0; y < p.height; y += 20) {
				let n = p.noise(x * 0.01, y * 0.01, p.frameCount * 0.005);
				let angle = n * p.TWO_PI * 2;
				p.stroke(163, 230, 53, 100);
				p.line(x, y, x + p.cos(angle) * 10, y + p.sin(angle) * 10);
			}
		}
	};

	p.windowResized = function () {
		const container = p.canvas.parentElement;
		p.resizeCanvas(container.offsetWidth, 400);
	};
}