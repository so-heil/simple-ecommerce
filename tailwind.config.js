module.exports = {
    purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                accent: {
                    light: "#006989",
                    DEFAULT: "#0B2545",
                    dark: "#0B0033",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
