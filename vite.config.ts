import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, 'src'),
			'@store': path.resolve(__dirname, 'src/store'),
			'@components': path.resolve(__dirname, 'src/components'),
			'@hooks': path.resolve(__dirname, 'src/hooks'),
			'@modules': path.resolve(__dirname, 'src/modules'),
			'@pages': path.resolve(__dirname, 'src/pages'),
			'@utilities': path.resolve(__dirname, 'src/utilities'),
			'@theme': path.resolve(__dirname, 'src/theme'),
			'@constants': path.resolve(__dirname, 'src/constants'),
			'@HOCs': path.resolve(__dirname, 'src/HOCs'),
			'@types': path.resolve(__dirname, 'src/types'),
		},
	},
});
