/** @type {import("prettier").Config} */
module.exports = {
  plugins: [
    "prettier-plugin-packagejson",
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-svelte",
  ],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
