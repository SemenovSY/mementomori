import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as fs from 'fs';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "0.0.0.0",
    hmr: {
        host: 'local-memento-mori.qa-dc.ru',
        port: 3000,
    },
    https: {
      key: fs.readFileSync('./ssl/key.pem'),
      cert: fs.readFileSync('./ssl/cert.pem'),
    },
  },
})
