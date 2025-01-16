/** @type {import('tailwindcss').Config} */
const futuremanClampSpacing = require("futureman-tailwind-clamp-spacing");

export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],

    theme: {
        extend: {
            // fontFamily: {
            //     joyrideAlt: ["Joyride ALT", "sans-serif"],
            // },
            spacing: {
                ...futuremanClampSpacing,

                //site specific spacing
                // om: "clamp(2rem, 1.3506rem + 2.7706vw, 8rem)",
                // gutter: "clamp(1rem, 0.7565rem + 1.039vw, 3.25rem)",
                // gutterHalf: "clamp(0.5rem, 0.3782rem + 0.5195vi, 1.625rem)",
            },
        },
    },

    plugins: [
        require("futureman-tailwind-clamp-plugin"),
        require("@tailwindcss/typography"),
    ],
};
