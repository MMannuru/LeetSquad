/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                fun: ['"Comic Neue"', 'cursive', 'sans-serif'],
            },
            colors: {
                gold: '#FFD700',
                streak: '#FF5722',
            },
            boxShadow: {
                fun: '0 4px 30px rgba(0,0,0,0.1), 0 1.5px 6px 0 rgba(255,215,0,0.15)',
            },
        },
    },
    plugins: [],
}