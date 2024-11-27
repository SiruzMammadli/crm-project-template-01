import type {Config} from "tailwindcss";

// @ts-ignore
const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                sm: "0 1px 2px 0 rgb(var(--slate-950) / 5%)",
            },
            colors: {
                primary: {
                    950: 'rgb(var(--primary-950))',
                    900: 'rgb(var(--primary-900))',
                    800: 'rgb(var(--primary-800))',
                    700: 'rgb(var(--primary-700))',
                    600: 'rgb(var(--primary-600))',
                    500: 'rgb(var(--primary-500))',
                    400: 'rgb(var(--primary-400))',
                    300: 'rgb(var(--primary-300))',
                    200: 'rgb(var(--primary-200))',
                    100: 'rgb(var(--primary-100))',
                    50: 'rgb(var(--primary-50))',
                },
                secondary: {
                    950: 'rgb(var(--slate-950))',
                    900: 'rgb(var(--slate-900))',
                    800: 'rgb(var(--slate-800))',
                    700: 'rgb(var(--slate-700))',
                    600: 'rgb(var(--slate-600))',
                    500: 'rgb(var(--slate-500))',
                    400: 'rgb(var(--slate-400))',
                    300: 'rgb(var(--slate-300))',
                    200: 'rgb(var(--slate-200))',
                    100: 'rgb(var(--slate-100))',
                    50: 'rgb(var(--slate-50))',
                }
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
