export const tokens = {
  black: {
    100: "#1a1a1a",
    200: "#333333",
    300: "#4d4d4d",
    400: "#666666",
    500: "#808080",
    600: "#999999",
    700: "#b3b3b3",
    800: "#cccccc",
    900: "#e6e6e6",
    },
  primary: {
    // light red
      100: "#ffb0a8",
      200: "#ff7f76",
      300: "#ff4f43",
      400: "#ff1f11",
      500: "#e90000",
      600: "#b70000",
      700: "#850000",
      800: "#520000",
      900: "#200000",
      
  },
  secondary: {
    // yellow
    100: "#fcf0dd",
    200: "#fae1bb",
    300: "#f7d299",
    400: "#f5c377",
    500: "#f2b455",
    600: "#c29044",
    700: "#916c33",
    800: "#614822",
    900: "#302411",
  },
  tertiary: {
    // purple
    500: "#00008B",
  },
  background: {
    light: "white",
    main: "#1f2026",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.black,
      main: tokens.black[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.black[200],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.black[300],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.black[500],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.black[700],
    },
  },
};