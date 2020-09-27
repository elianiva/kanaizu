import { createRollupConfigs } from "./scripts/base.config.js"
import autoPreprocess from "svelte-preprocess"
import postcssImport from "postcss-import"
import tailwindcss from "tailwindcss"
import json from "@rollup/plugin-json"
import cssnano from "cssnano"
import purgecss from "@fullhuman/postcss-purgecss"

const production = !process.env.ROLLUP_WATCH

export const config = {
  staticDir: "static",
  distDir: "dist",
  buildDir: `dist/build`,
  serve: !production,
  production,
  rollupWrapper: rollup => {
    rollup.plugins = [...rollup.plugins, json()]
  },
  svelteWrapper: svelte => {
    svelte.preprocess = [
      autoPreprocess({
        postcss: {
          plugins: [
            postcssImport(),
            tailwindcss("./tailwind.config.js"),
            purgecss({
              content: ["./src/**/*.svelte"],
              whitelist: ["mplus", "noto-sans", "noto-serif", "mplus-normal"],
            }),
            cssnano(),
          ],
        },
        defaults: { style: "postcss" },
      }),
    ]
  },
  swWrapper: worker => worker,
}

const configs = createRollupConfigs(config)

export default configs

/**
  Wrappers can either mutate or return a config

  wrapper example 1
  svelteWrapper: (cfg, ctx) => {
    cfg.preprocess: mdsvex({ extension: '.md' }),
  }

  wrapper example 2
  rollupWrapper: cfg => {
    cfg.plugins = [...cfg.plugins, myPlugin()]
    return cfg
  }
*/
