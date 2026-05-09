export default function heroBackground(p) {
	let shapes = [];
	let isDark = false;

	function getColors() {
		isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
			(!document.documentElement.getAttribute('data-theme') &&
			window.matchMedia('(prefers-color-scheme: dark)').matches);

		return isDark
			? { bg: [26, 46, 15], fill: [80, 140, 40, 18], stroke: [120, 180, 60, 25] }
			: { bg: [216, 232, 192], fill: [160, 200, 100, 25], stroke: [100, 160, 60, 35] };
	}

	class Shape {
		constructor() {
			this.reset(true);
		}

		reset(randomY = false) {
			this.x = p.random(p.width);
			this.y = randomY ? p.random(p.height) : p.random(-100, -20);
			this.size = p.random(40, 120);
			this.speedX = p.random(-0.15, 0.15);
			this.speedY = p.random(0.1, 0.35);
			this.rotation = p.random(p.TWO_PI);
			this.rotationSpeed = p.random(-0.003, 0.003);
			this.sides = Math.floor(p.random(3, 7));
			this.noiseOffset = p.random(1000);
		}

		update() {
			this.x += this.speedX + (p.noise(this.noiseOffset) - 0.5) * 0.3;
			this.y += this.speedY;
			this.rotation += this.rotationSpeed;
			this.noiseOffset += 0.005;
			if (this.y > p.height + 100) this.reset();
		}

		draw(colors) {
			p.push();
			p.translate(this.x, this.y);
			p.rotate(this.rotation);
			p.fill(...colors.fill);
			p.stroke(...colors.stroke);
			p.strokeWeight(1);
			p.beginShape();
			for (let i = 0; i < this.sides; i++) {
				const angle = (p.TWO_PI / this.sides) * i;
				p.vertex(
					Math.cos(angle) * this.size * 0.5,
					Math.sin(angle) * this.size * 0.5
				);
			}
			p.endShape(p.CLOSE);
			p.pop();
		}
	}

	p.setup = function () {
		const container = p.canvas.parentElement;
		p.createCanvas(container.offsetWidth, container.offsetHeight);
		p.noStroke();

		for (let i = 0; i < 18; i++) {
			shapes.push(new Shape());
		}
	};

	p.draw = function () {
		const colors = getColors();
		p.clear();
		shapes.forEach(s => {
			s.update();
			s.draw(colors);
		});
	};

	p.windowResized = function () {
		const container = p.canvas.parentElement;
		p.resizeCanvas(container.offsetWidth, container.offsetHeight);
	};
}