import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 
import reactRefresh from '@vitejs/plugin-react-refresh';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgr({ 
      svgrOptions: {
        // svgr options
      },
    }),
    [reactRefresh()],
  ], 
})