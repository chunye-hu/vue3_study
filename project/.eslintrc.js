module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 0,
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": 0,
    "no-async-promise-executor": 0,
    "no-misleading-character-class": 0,
    "no-useless-catch": 0,
    "vue/no-v-html": "off",
    "no-useless-escape": 0,
    "no-case-declarations": 0,
    "vue/no-side-effects-in-computed-properties": 0,
    "vue/no-use-v-if-with-v-for": [
      "error",
      {
        allowUsingIterationVar: true,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        printWidth: 200,
        singleQuote: false,
        bracketSpacing: true,
        jsxBracketSameLine: true,
        htmlWhitespaceSensitivity: "ignore",
      },
    ],
  },
};
