module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  "installedESLint": true,
  "plugins": [
    "standard",
    "react"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "node": true
  }
}