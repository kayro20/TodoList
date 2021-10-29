const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,

  env: {
    browser: true
  },

  extends: [
    'plugin:vue/recommended',
    'standard'
  ],

  plugins: [
    'vue'
  ],

  globals: {
    __statics: true,
    chrome: true,
    cordova: true,
    ga: true,
    process: true
  },

  rules: {
    'arrow-parens': 'off',
    'generator-star-spacing': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': isProduction ? 'error' : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'one-var': 'off',
    'prefer-promise-reject-errors': 'off',

    // Recommended
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',

    // Uncategorized
    'vue/array-bracket-spacing': ['error', 'never'],
    'vue/arrow-spacing': ['error', { before: true, after: true }],
    'vue/attributes-order': ['error', { alphabetical: true }],
    'vue/block-spacing': ['error', 'always'],
    'vue/no-reserved-component-names': ['error'],
    'vue/script-indent': ['error'],
    'vue/static-class-names-order': ['error']

    // Cypress
    // "cypress/no-assigning-return-values": "error",
    // "cypress/no-unnecessary-waiting": "error",
    // "cypress/assertion-before-screenshot": "warn",
    // "cypress/no-force": "warn",
    // "cypress/no-async-tests": "error"
  }
}