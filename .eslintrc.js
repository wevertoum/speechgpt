module.exports = {
  root: true,
  extends: "@react-native-community",
  plugins: ["react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    quotes: ["error", "double"],
    "react/no-unstable-nested-components": [
      "warn",
      {
        allowAsProps: true,
      },
    ],
    "@typescript-eslint/no-unused-vars": "off",
    "react-native/no-inline-styles": "off",
  },
};
