import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            sans: ['DM Sans', 'sans-serif'], // Default sans-serif font
            cabin: ['Cabin', 'sans-serif'], // Additional font
          },
        },
        plugins: [
          function ({ addUtilities }) {
            addUtilities({
              ".scrollbar-hide": {
                "-ms-overflow-style": "none", // IE & Edge
                "scrollbar-width": "none", // Firefox
                "&::-webkit-scrollbar": {
                  display: "none", // Chrome, Safari, Opera
                },
              },
            });
          },
        ],
      },
    }),
  ],
})
