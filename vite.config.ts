import { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss(), tsconfigPaths()],
  server: {
    allowedHosts: true,
    host: '192.168.178.159',
    port: 5173,
  },
} satisfies UserConfig;
