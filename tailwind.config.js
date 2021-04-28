module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                accent: {
                    light: "#727F81",
                    DEFAULT: "#576161",
                    dark: "#3C4546",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
