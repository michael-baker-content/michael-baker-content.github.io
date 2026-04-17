import { useState, useEffect } from 'react';
import { Mafs, Coordinates, Plot } from 'mafs';
import 'mafs/core.css';

const presets = {
	normalDistribution: (x) => (1 / Math.sqrt(2 * Math.PI)) * Math.exp(-0.5 * x * x),
	sine: (x) => Math.sin(x),
	cosine: (x) => Math.cos(x),
	quadratic: (x) => x * x,
	cubic: (x) => x * x * x,
};

function getTheme() {
	if (typeof document === 'undefined') return 'light';
	return document.documentElement.getAttribute('data-theme') ?? 'light';
}

export default function MafsChart({ type = 'normalDistribution', xRange = [-5, 5], yRange = [-0.2, 0.5], caption }) {
	const [theme, setTheme] = useState(getTheme);

	useEffect(() => {
		const observer = new MutationObserver(() => {
			setTheme(getTheme());
		});
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme'],
		});
		return () => observer.disconnect();
	}, []);

	const isDark = theme === 'dark';

	const colors = {
		background: isDark ? '#1a1a1a' : '#edeae4',
		foreground: isDark ? '#e8e8e8' : '#1a1a18',
		border: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.12)',
		plot: isDark ? '#a3e635' : '#3a6b08',
	};

	const fn = presets[type];

	return (
		<figure style={{ margin: '1.5em 0' }}>
			<style>{`
				.MafsView {
					background: ${colors.background} !important;
					--mafs-bg: ${colors.background} !important;
					--mafs-fg: ${colors.foreground} !important;
					--mafs-line-color: ${colors.border} !important;
					--mafs-origin-color: ${colors.foreground} !important;
					--grid-line-subdivision-color: ${colors.border} !important;
				}
			`}</style>
			<div style={{
				borderRadius: '8px',
				border: `0.5px solid ${colors.border}`,
				overflow: 'hidden',
			}}>
				<Mafs
					viewBox={{ x: xRange, y: yRange }}
					preserveAspectRatio={false}
					height={350}
				>
					<Coordinates.Cartesian />
					<Plot.OfX y={fn} color={colors.plot} />
				</Mafs>
			</div>
			{caption && (
				<figcaption style={{
					fontSize: '0.8em',
					textAlign: 'center',
					marginTop: '0.5em',
					color: 'var(--text-muted)',
				}}>
					{caption}
				</figcaption>
			)}
		</figure>
	);
}