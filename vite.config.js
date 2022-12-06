import { sveltekit } from '@sveltejs/kit/vite';
import ViteFS from 'vite-fs'

const config = {
	plugins: [
		sveltekit(),
		ViteFS()
	],
};

export default config;
