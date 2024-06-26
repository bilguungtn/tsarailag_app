module.exports = {
  root: true,
  extends: ["next", "prettier"],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
  plugins: ["simple-import-sort", "tailwindcss"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["external", "internal", "parent", "sibling", "index"],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
          },
        ],
        pathGroupsExcludedImportTypes: [],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
