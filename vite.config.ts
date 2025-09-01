import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'frontend_principal',
      remotes: {
        frontend_top_users: 'http://localhost:5001/assets/remoteEntry.js',
        frontend_top_finance: 'http://localhost:5002/assets/remoteEntry.js',
      },
      // shared: ['react', 'react-dom', 'react-router-dom', '@tanstack/react-query', '@mui/x-data-grid', '@emotion/react'],
      // shared: [dependencies.react],
      shared: [
        'react',
        'react-dom',
        'react-router-dom',
        '@tanstack/react-query',
        '@mui/x-data-grid',
        // added all for testing
        // '@emotion/react',
        // '@emotion/styled',
        // '@hookform/resolvers',
        // '@mui/icons-material',
        // '@mui/material',
        // 'axios',
        // 'react-hook-form',
        // 'react-toastify',
        // 'zod'
      ]
    })
  ],
  preview: {
    port: 5000,
    strictPort: true,
  },
  server: {
    host: 'localhost',
    port: 5000,
    strictPort: true,
    origin: "http://localhost:5000",
    fs: { allow: ['.', '../shared'] }
  },
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
})
