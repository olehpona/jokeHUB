import { addDynamicIconSelectors } from "@iconify/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./scripts/*.ts"],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};
