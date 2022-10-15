/** @type {import('prettier').Config} */
module.exports = {
  plugins: ["prettier-plugin-packagejson", "prettier-plugin-svelte"],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
