/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      // ---- Colors: exact hex values confirmed via the site's own CSS
      // custom properties (--black-hsl, --lightAccent-hsl, --accent-hsl,
      // --darkAccent-hsl) converted from HSL, plus DevTools computed-style
      // checks on individual elements. See design-audit.md Section 2.
      colors: {
        ink: "#2B2B2B", // --black-hsl -> default text color everywhere
        pureblack: "#000000", // --safeDarkAccent-hsl -> hover-fill state
        cream: "#F6F4EE", // --lightAccent-hsl -> hero/empathy/final-CTA bg
        tan: "#E3D9CA", // --accent-hsl / --safeLightAccent-hsl -> "How We Work" bg
        teal: "#86B3B3", // --darkAccent-hsl -> script-accent color
      },
      // ---- Fonts: the live site uses licensed commercial fonts
      // (beaufort-pro, Muli, PrintedMoments) that can't legally be bundled
      // here. Muli's free open-source successor "Mulish" is a near-exact
      // match. beaufort-pro and PrintedMoments have no free equivalent, so
      // Cormorant Garamond (serif) and Sacramento (script) are used as the
      // closest visual substitutes. See app/layout.js for the font loading.
      fontFamily: {
        serif: ["var(--font-heading)", "serif"],
        sans: ["var(--font-body)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      // ---- Type scale: exact px sizes + line-heights + letter-spacing
      // confirmed via DevTools Computed tab (design-audit.md Section 3)
      fontSize: {
        h1: ["56.694px", { lineHeight: "71.117px", letterSpacing: "-0.01em" }],
        h2: ["45.4687px", { lineHeight: "58.8183px", letterSpacing: "-0.01em" }],
        h3: ["37.4506px", { lineHeight: "49.4948px", letterSpacing: "-0.01em" }],
        h4: ["26.2253px", { lineHeight: "35.6874px", letterSpacing: "-0.01em" }],
        body: ["16.6036px", { lineHeight: "29.8865px" }],
        eyebrow: ["15px", { lineHeight: "27px", letterSpacing: "0.12em" }],
        btn: ["12.5946px", { lineHeight: "normal", letterSpacing: "0.12em" }],
        // Nav link style — confirmed distinct from btn: 13.3964px / 1.8× line-height
        // / 1.33964px letter-spacing / 1.33964px 0px padding (DevTools computed).
        // Visually "heavier" than btn because of the larger size + tight tracking.
        navlink: ["13.3964px", { lineHeight: "24.1135px", letterSpacing: "1.33964px" }],
        // Footer link/content style — 14.9433px / 26.8979px line-height (DevTools computed).
        footerlink: ["14.9433px", { lineHeight: "26.8979px" }],
      },
      maxWidth: {
        site: "1321px", // confirmed container max-width, repeats across 7+ sections
      },
    },
  },
  plugins: [],
};
