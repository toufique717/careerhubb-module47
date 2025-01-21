module.exports = {
  env: {
    browser: true, // Enables browser global variables
    node: true,    // Enables Node.js global variables
    es2021: true,  // Enables ES2021 globals and syntax
  },
  extends: [
    "eslint:recommended", // Use recommended ESLint rules
    "plugin:react/recommended", // Recommended React rules (if using React)
    "plugin:@typescript-eslint/recommended", // TypeScript rules (if using TypeScript)
  ],
  parserOptions: {
    ecmaVersion: 2021, // Use modern ECMAScript syntax
    sourceType: "module", // Allow the use of imports
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing (for React)
    },
  },
  plugins: [
    "react", // React plugin (if using React)
    "@typescript-eslint", // TypeScript plugin (if using TypeScript)
  ],
  rules: {
    // Add custom rules or override defaults here
    "no-console": "warn", // Warns on console.log usage
    "react/prop-types": "off", // Disables prop-types rule for React (if using TypeScript)
  },
  settings: {
    react: {
      version: "detect", // Automatically detect the React version
    },
  },
};
