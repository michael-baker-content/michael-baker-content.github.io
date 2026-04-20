export interface Project {
	name: string;
	description: string;
	repoUrl: string;
	tags: string[];
	status: 'active' | 'complete' | 'learning';
	image?: string;
	liveUrl?: string;
	startDate?: string;
	lastUpdated?: string;
	learningFocus?: string;
	type?: 'web-app' | 'data-science' | 'creative-coding' | 'tool' | 'learning-project';
	featured?: boolean;
	blogPosts?: string[];
}

export const projects: Project[] = [
	{
		name: 'NBA Roto Tracker',
		description: 'A Flask app that pulls live NBA data from a third party API. An experiment in working with APIs and deploying to Railway.',
		repoUrl: 'https://github.com/michael-baker-content/nba-roto-tracker',
		liveUrl: 'https://nba-roto-tracker.up.railway.app',
		tags: ['python', 'flask', 'api', 'railway'],
		status: 'complete',
		type: 'web-app',
		learningFocus: 'API integration and cloud deployment',
		startDate: '2024-12',
		featured: true,
		blogPosts: ['nba-roto-tracker'],
		image: 'placeholder-2_cjqrms',
	},
	{
		name: 'Generative Art with p5.js',
		description: 'Experiments in creative coding using p5.js — flow fields, noise, and interactive sketches.',
		repoUrl: 'https://github.com/michael-baker-content',
		tags: ['javascript', 'p5js', 'creative-coding'],
		status: 'active',
		type: 'creative-coding',
		learningFocus: 'Generative art and Perlin noise',
		startDate: '2025-01',
		featured: true,
		blogPosts: ['p5js-generative-art'],
		image: 'placeholder-3_fnchav',
	},
	{
		name: 'Python Data Science',
		description: 'Exploratory data analysis and visualization using NumPy, Matplotlib, and Seaborn.',
		repoUrl: 'https://github.com/michael-baker-content',
		tags: ['python', 'numpy', 'matplotlib', 'seaborn', 'data-science'],
		status: 'learning',
		type: 'data-science',
		learningFocus: 'Statistical analysis and data visualization',
		startDate: '2025-01',
		featured: true,
		blogPosts: ['python-data-science-intro'],
		image: 'placeholder-4_rdttsz',
	},
	{
		name: 'Frontend Development Path',
		description: 'Working through Scrimba\'s frontend curriculum covering HTML, CSS, JavaScript, React, and Node.js.',
		repoUrl: 'https://github.com/michael-baker-content',
		tags: ['html', 'css', 'javascript', 'react'],
		status: 'active',
		type: 'learning-project',
		learningFocus: 'Full frontend stack',
		startDate: '2024-11',
		featured: false,
		blogPosts: ['frontend-learning-path'],
		image: 'placeholder-1_dsn303',
	},
	{
		name: 'Strudel Live Coding',
		description: 'Experiments with Strudel, a browser-based live coding environment for musical patterns.',
		repoUrl: 'https://github.com/michael-baker-content',
		tags: ['javascript', 'music', 'creative-coding', 'strudel'],
		status: 'learning',
		type: 'creative-coding',
		learningFocus: 'Algorithmic music composition',
		startDate: '2025-03',
		featured: false,
		blogPosts: ['strudel-live-coding'],
		image: 'placeholder-3_fnchav',
	},
];