module.exports = {
  content: ["./**/*.php", "./src/**/*.{html,js,jsx}", "./public/**/*.html"],
  plugins: [],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      display: "Forum",
      body: "Roboto",
    },
    extend: {
      colors: {
        darkest: "#705e29",
        mainGold: "#e4ac52",
        lighter: "#ffebad",
        offWhite: "#fffdf5",
        dark: "#000000",
        white: "#ffffff",
        woocommerce: "#1a0a16",
        wcorange: "#ffba00",
        wcblue: "#2ea2cc",
        wcprimary: "#a46497",
        wcprimarytext: "#fff",
        wcsecondary: "#ebe9eb",
        wcsecondarytext: "#515151",
        wchighlight: "#77a464",
        wchighlightext: "#fff",
        wccontentbg: "#fff",
        wcsubtext: "#767676",
        wcgreen: "#a00",
      },
    },
  },
};
