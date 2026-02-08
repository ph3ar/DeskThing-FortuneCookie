// @ts-check
// DeskThing Fortune Cookie - No API keys required!
import { defineConfig } from '@deskthing/cli';

export default defineConfig({
  development: {
    logging: {
      level: "info",
      prefix: "[FortuneCookie Server]",
    },
    client: {
      logging: {
        level: "info",
        prefix: "[FortuneCookie Client]",
        enableRemoteLogging: true,
      },
      clientPort: 3000,
      viteLocation: "http://localhost",
      vitePort: 5173,
      linkPort: 8080,
    },
    server: {
      editCooldownMs: 1000,
      mockData: {
        settings: {
          refreshInterval: 30,
          category: 'all',
        }
      }
    },
  }
});
