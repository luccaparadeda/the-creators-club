/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-1-mob": 'url("/background-section.png")',
        "background-2-mob": 'url("/last-background-image-mob.png")',
        "background-1-desk": 'url("/background-section-desk.png")',
        "background-2-desk": 'url("/last-background-image-desk.png")',
      },
      boxShadow: {
        "offwhite-top": "0 -10px 10px #F8F8F8",
      },
    },
  },
  plugins: [],
};
