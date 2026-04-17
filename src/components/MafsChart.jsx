import { Mafs, Coordinates, Plot, Theme } from 'mafs';
import 'mafs/core.css';

const presets = {
	normalDistribution: (x) => (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x),
	sine: (x) => Math.sin(x),
	cosine: (x) => Math.cos(x),
	quadratic: (x) => x * x,
	cubic: (x) => x * x * x,
};

export default function MafsChart({ type = 'normalDistribution', xRange = [-5, 5], yRange = [-0.2, 0.5], caption }) {
	const fn = presets[type];

	return (
		<figure style={{ margin: '1.5em 0' }}>
			<Mafs
				viewBox={{ x: xRange, y: yRange }}
				preserveAspectRatio={false}
				height={350}
			>
				<Coordinates.Cartesian />
				<Plot.OfX y={fn} color={Theme.green} />
			</Mafs>
			{caption && (
				<figcaption style={{
					fontSize: '0.8em',
					textAlign: 'center',
					marginTop: '0.5em',
					color: 'var(--text-muted)'
				}}>
					{caption}
				</figcaption>
			)}
		</figure>
	);
}