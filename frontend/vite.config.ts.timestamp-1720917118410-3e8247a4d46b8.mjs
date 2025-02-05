// vite.config.ts
import { defineConfig } from "file:///C:/Users/caiof/Documents/Meus/_Estudos_/Faculdade/UFPE/2024.1/IF682-%20Engenharia%20Software%20e%20Sistemas/Projeto/Codigo/ess_2024.1_delivery/frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/caiof/Documents/Meus/_Estudos_/Faculdade/UFPE/2024.1/IF682-%20Engenharia%20Software%20e%20Sistemas/Projeto/Codigo/ess_2024.1_delivery/frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
import istanbul from "file:///C:/Users/caiof/Documents/Meus/_Estudos_/Faculdade/UFPE/2024.1/IF682-%20Engenharia%20Software%20e%20Sistemas/Projeto/Codigo/ess_2024.1_delivery/frontend/node_modules/vite-plugin-istanbul/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false
    })
  ],
  server: {
    port: 3e3
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxjYWlvZlxcXFxEb2N1bWVudHNcXFxcTWV1c1xcXFxfRXN0dWRvc19cXFxcRmFjdWxkYWRlXFxcXFVGUEVcXFxcMjAyNC4xXFxcXElGNjgyLSBFbmdlbmhhcmlhIFNvZnR3YXJlIGUgU2lzdGVtYXNcXFxcUHJvamV0b1xcXFxDb2RpZ29cXFxcZXNzXzIwMjQuMV9kZWxpdmVyeVxcXFxmcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcY2Fpb2ZcXFxcRG9jdW1lbnRzXFxcXE1ldXNcXFxcX0VzdHVkb3NfXFxcXEZhY3VsZGFkZVxcXFxVRlBFXFxcXDIwMjQuMVxcXFxJRjY4Mi0gRW5nZW5oYXJpYSBTb2Z0d2FyZSBlIFNpc3RlbWFzXFxcXFByb2pldG9cXFxcQ29kaWdvXFxcXGVzc18yMDI0LjFfZGVsaXZlcnlcXFxcZnJvbnRlbmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2NhaW9mL0RvY3VtZW50cy9NZXVzL19Fc3R1ZG9zXy9GYWN1bGRhZGUvVUZQRS8yMDI0LjEvSUY2ODItJTIwRW5nZW5oYXJpYSUyMFNvZnR3YXJlJTIwZSUyMFNpc3RlbWFzL1Byb2pldG8vQ29kaWdvL2Vzc18yMDI0LjFfZGVsaXZlcnkvZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCBpc3RhbmJ1bCBmcm9tIFwidml0ZS1wbHVnaW4taXN0YW5idWxcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGlzdGFuYnVsKHtcclxuICAgICAgY3lwcmVzczogdHJ1ZSxcclxuICAgICAgcmVxdWlyZUVudjogZmFsc2UsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtb0IsU0FBUyxvQkFBb0I7QUFDaHFCLE9BQU8sV0FBVztBQUNsQixPQUFPLGNBQWM7QUFHckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLElBQ2QsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
