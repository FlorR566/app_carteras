import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],

	build: {
		cssCodeSplit: true, // divide el CSS en chunks igual que el JS
		rollupOptions: {
			output: {
				manualChunks: {
					"vendor-react": ["react", "react-dom"],
				},
			},
		},
		// Avisa cuando un chunk supera 500kb
		chunkSizeWarningLimit: 500,
	},
});
