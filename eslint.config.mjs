import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
]);

// import js from "@eslint/js";
// import globals from "globals";
// import { defineConfig } from "eslint/config";

// export default defineConfig([
//   {
//     files: ["**/*.{js,mjs,cjs}"],
//     ...js.configs.recommended, // brings in "rules", "languageOptions", etc.
//     languageOptions: {
//       globals: { ...globals.browser, ...globals.node },
//     },
//     rules: {
//       "no-unused-vars": "warn",
//       "semi": ["error", "always"],
//       "eqeqeq": "error",
//       "no-console": "warn",
//       "no-var": "error",
//     },
//   },
// ]);
