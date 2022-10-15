import serverless from "@yarbsemaj/adapter-lambda";
import preprocess from "svelte-preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    adapter: serverless(),
  },
};

export default config;
