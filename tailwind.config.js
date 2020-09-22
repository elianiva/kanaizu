module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.svelte"],
  theme: {
    extend: {
      fontSize: {
        "8xl": "6rem"
      }
    }
  },
  variants: {},
  plugins: []
}
