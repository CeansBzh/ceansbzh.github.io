/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  plugins: ["tailwindcss"],
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "tailwindcss/no-custom-classname": "off", // override recommended rule
  },
};
