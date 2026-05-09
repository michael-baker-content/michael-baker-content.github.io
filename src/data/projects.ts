export interface Project {
	slug: string;
	name: string;
	description: string;
	overview?: string;
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
		slug: 'bakerlinks',
		name: 'BakerLinks',
		description: 'BakerLinks',
		overview: `This is the first Next.js project that I've deployed, and also the first project I've deployed on Vercel.`,
		repoUrl: 'https://github.com/michael-baker-content/bakerlinks',
		liveUrl: 'https://bakerlinks.com',
		tags: ["nextjs", "vercel", "supabase", "react", "auth", "platform"],
		status: 'complete',
		type: 'web-app',
		learningFocus: 'Authorization and cloud deployment',
		startDate: '2026-05-09',
		featured: true,
		blogPosts: ['creating-bakerlinks'],
		image: 'placeholder-3_fnchav',
	},
	{
		slug: 'cine2helper',
		name: 'Cine2Helper',
		description: 'A companion tool for Cine2Nerdle Battle hosted on Vercel.',
		overview: `This is the first Next.js project that I've deployed, and also the first project I've deployed on Vercel.`,
		repoUrl: 'https://github.com/michael-baker-content/cine2helper',
		liveUrl: 'https://cine2helper.vercel.app',
		tags: ['nextjs', 'vercel', 'api', 'react', 'movies', 'tmdb'],
		status: 'complete',
		type: 'web-app',
		learningFocus: 'API integration and cloud deployment',
		startDate: '2026-04-24',
		featured: true,
		blogPosts: ['cine2helper-next-app'],
		image: 'placeholder-4_rdttsz',
	},
	{
		slug: 'nba-roto-tracker',
		name: 'NBA Roto Tracker',
		description: 'A Flask app that pulls live NBA data from a third party API. An experiment in working with APIs and deploying to Railway.',
		overview: `The NBA Roto Tracker started as a simple question: could I build a useful sports data tool using a public API and deploy it with minimal friction? The answer turned out to be yes, though the path there involved a few unexpected detours.\n\nFlask made sense as a lightweight framework for this kind of API-driven app. There's no need for a heavy full stack framework when your primary job is fetching data, transforming it, and serving it to a frontend. The trickiest part of the project was handling rate limits and understanding the shape of the data returned by the API. NBA statistics data is deeply nested and requires careful parsing to get into a usable format.\n\nRailway turned out to be a genuinely pleasant deployment experience. Connecting a GitHub repo and getting a live URL took under ten minutes. In hindsight, adding a caching layer early would have saved some headaches with API rate limits during development.`,
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
		slug: 'p5js-generative-art',
		name: 'Generative Art with p5.js',
		description: 'Experiments in creative coding using p5.js — flow fields, noise, and interactive sketches.',
		overview: `There is something uniquely satisfying about writing code whose output is visual and immediate. p5.js lowers the barrier to that experience significantly — you can have something moving on screen within minutes.\n\nMy first sketches were simple geometric patterns. Circles, grids, and noise fields. The Perlin noise functions built into p5.js are particularly useful for creating organic-feeling motion. One of p5.js's strengths is how easily you can tie visuals to mouse or keyboard input, making sketches respond to the viewer and turning animations into experiences.\n\nThe longer term goal is to explore combining p5.js with Strudel for audio-reactive visuals — having sound drive the parameters of a generative sketch is something I find genuinely exciting.`,
		repoUrl: 'https://github.com/michael-baker-content',
		tags: ['javascript', 'p5js', 'creative-coding'],
		status: 'active',
		type: 'creative-coding',
		learningFocus: 'Generative art and Perlin noise',
		startDate: '2025-01',
		featured: false,
		blogPosts: ['p5js-generative-art'],
		image: 'placeholder-3_fnchav',
	},
	{
		slug: 'python-data-science',
		name: 'Python Data Science',
		description: 'Exploratory data analysis and visualization using NumPy, Matplotlib, and Seaborn.',
		overview: `NumPy's array operations were the first thing that made Python feel genuinely powerful compared to general purpose languages. The ability to express operations over entire arrays without explicit loops is both elegant and fast.\n\nMatplotlib gives you fine-grained control over every aspect of a plot. Seaborn sits on top of it and makes statistical visualizations much more approachable. For exploratory data analysis, Seaborn's pairplot is particularly useful — it gives you a matrix of scatterplots across all numeric variables in a dataset in a single line.\n\nThe most valuable learning came from working with real datasets rather than toy examples. Messy data forces you to actually understand what you're doing rather than following a tutorial mechanically. One thing I appreciated was seeing the linear algebra I had been studying show up directly in data science workflows.`,
		repoUrl: 'https://github.com/michael-baker-content',
		tags: ['python', 'numpy', 'matplotlib', 'seaborn', 'data-science'],
		status: 'learning',
		type: 'data-science',
		learningFocus: 'Statistical analysis and data visualization',
		startDate: '2025-01',
		featured: false,
		blogPosts: ['python-data-science-intro'],
		image: 'placeholder-4_rdttsz',
	},
	{
		slug: 'frontend-development-path',
		name: 'Frontend Development Path',
		description: 'Working through Scrimba\'s frontend curriculum covering HTML, CSS, JavaScript, React, and Node.js.',
		overview: `There is a lot of noise in frontend learning resources. Having a structured curriculum removes the decision fatigue of figuring out what to learn next and lets you focus on actually learning.\n\nThe fundamentals turned out to be deeper than expected. CSS in particular has a lot of nuance around specificity, the box model, and layout systems like Flexbox and Grid that rewards careful study rather than just copying patterns. Moving into JavaScript is where the curriculum starts to feel genuinely powerful — the jump from static pages to dynamic interfaces is significant.\n\nReact's component model took a little time to internalize but once it clicked it changed how I think about UI structure generally. The path continues into Node.js, Express, and eventually Next.js.`,
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
		slug: 'strudel-live-coding',
		name: 'Strudel Live Coding',
		description: 'Experiments with Strudel, a browser-based live coding environment for musical patterns.',
		overview: `Strudel is a browser-based live coding environment for musical patterns, inspired by TidalCycles. It lets you write code that generates music in real time — patterns of notes, rhythms, and effects described as expressions rather than traditional notation.\n\nWhat excites me about Strudel is how it makes music composition feel like programming — patterns are first-class values you can transform, combine, and sequence using familiar functional programming concepts. The connection to p5.js for visual work is natural: both are about describing generative processes in code.\n\nThe longer term goal is to combine Strudel with p5.js for audio-reactive visuals, where the musical patterns drive the parameters of generative sketches in real time.`,
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