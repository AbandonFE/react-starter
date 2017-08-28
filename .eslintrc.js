module.exports = {
  parser: "babel-eslint",
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // "extends": "airbnb",
  // add your custom rules here
  plugins: [
    "react"
  ],
  ecmaFeatures: {
    "jsx": true // 启用 JSX
  },
  plugins: [
    "react", "html"
  ],
  rules: {}
}