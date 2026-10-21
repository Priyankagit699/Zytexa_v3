import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Virtual module listing every usable logo image in public/client, read from disk at build/dev time.
const CLIENT_DIR = path.resolve('public/client');
const IMG = /\.(png|jpe?g|webp|svg|avif|gif)$/i;
function clientLogos() {
  const id = 'virtual:client-logos';
  const resolved = '\0' + id;
  return {
    name: 'client-logos',
    resolveId: (s) => (s === id ? resolved : null),
    load(s) {
      if (s !== resolved) return null;
      const files = fs.existsSync(CLIENT_DIR) ? fs.readdirSync(CLIENT_DIR).filter((f) => IMG.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true })) : [];
      return `export default ${JSON.stringify(files)};`;
    },
    configureServer(server) {
      server.watcher.add(CLIENT_DIR);
      const reload = (f) => {
        if (!path.resolve(f).startsWith(CLIENT_DIR)) return;
        const mod = server.moduleGraph.getModuleById(resolved);
        if (mod) server.moduleGraph.invalidateModule(mod);
        server.ws.send({ type: 'full-reload' });
      };
      server.watcher.on('add', reload).on('unlink', reload);
    },
  };
}
export default defineConfig({ plugins: [react(), clientLogos()] });
