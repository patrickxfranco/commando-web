import { UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import tailwindcss from '@tailwindcss/vite';

export default {
  plugins: [tailwindcss(), tsconfigPaths()],
  server: {
    host: '192.168.57.200',
    port: 5173,
  },
} satisfies UserConfig;
