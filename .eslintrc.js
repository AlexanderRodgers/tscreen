module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "eol-last": ["never"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
  }
}
