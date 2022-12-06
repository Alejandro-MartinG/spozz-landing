import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			fs: require.resolve('rollup-plugin-node-builtins'),
		},
  	}
};

export default config;
