module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recommended-less'],
  plugins: ['stylelint-less'],
  ignoreFiles: ['src/sass/vendor/**/*', 'public/**/*'],
  overrides: [],
  rules: {
    'selector-class-pattern': null,
    'max-nesting-depth': 10
  }
};
