/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    "prettier-plugin-packagejson",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-svelte",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
