import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      '@views': path.resolve(__dirname, 'src/views'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@enums': path.resolve(__dirname, 'src/enums'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      "@store": path.resolve(__dirname, 'src/store'),
      "@redux-slices": path.resolve(__dirname, 'src/redux-slices'),
      "@config": path.resolve(__dirname, 'src/config')
  }
  }
})
