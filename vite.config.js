// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig(({ mode }) => {

//   return {
//     base: mode === 'production' ? '/Website-Reposteria/' : '/',
//     plugins: [react()],
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // The base must match your repository name exactly
  base: '/Website-Reposteria/',
  plugins: [react()],
})
