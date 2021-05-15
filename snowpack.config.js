module.exports = {
    mount: {
        public: { url: "/", static: true },
        src: { url: "/src" },
    },
    exclude: ["**/#*#", "**/.#*"],
    devOptions: {
        port: 8080,
        open: "none",
    },
    plugins: [["@snowpack/plugin-webpack"]],
};
