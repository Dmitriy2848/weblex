import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import viteSvgr from 'vite-plugin-svgr';

export default defineConfig({
	plugins: [react(), viteSvgr()],
	resolve: {
		alias: {
			app: resolve(__dirname, 'src', 'app'),
			processes: resolve(__dirname, 'src', 'processes'),
			pages: resolve(__dirname, 'src', 'pages'),
			widgets: resolve(__dirname, 'src', 'widgets'),
			features: resolve(__dirname, 'src', 'features'),
			entities: resolve(__dirname, 'src', 'entities'),
			shared: resolve(__dirname, 'src', 'shared')
		}
	}
});
