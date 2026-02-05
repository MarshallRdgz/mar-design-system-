import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-console": "off",
      "no-debugger": "off",
      "react/react-in-jsx-scope": "off",
      "constructor-super": "off",
      "no-undef": "warn",
      "no-unused-vars": "warn",
    },
  },
];
