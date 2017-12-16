module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    'array-bracket-spacing': 0,
    camelcase: 2,
    'computed-property-spacing': [ 2, 'never' ],
    'consistent-return': 2,
    curly: [ 2, 'multi' ],
    'dot-notation': 0,
    'eol-last': 2,
    eqeqeq: 2,
    indent: [ 2, 2 ],
    'keyword-spacing': 2,
    'linebreak-style': [ 2, 'unix' ],
    'max-len': [ 2, 80, 4 ],
    'new-cap': [ 2, { capIsNew: false } ],
    'no-console': [ 1 ],
    'no-eq-null': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [ 2, { max: 2 } ],
    'no-trailing-spaces': 2,
    'no-use-before-define': [ 2, 'nofunc' ],
    'no-undef': 2,
    'no-underscore-dangle': 0,
    'no-unused-vars': 2,
    'object-curly-spacing': [ 2, 'always' ],
    quotes: [ 2, 'single' ],
    semi: [ 2, 'never' ],
    'no-unexpected-multiline': 2,
    'space-before-blocks': [ 2, 'always' ],
    'space-before-function-paren': [ 2, 'always' ],
    'no-warning-comments': [ 1,
      {
        terms: [ 'todo', 'fixme' ],
        location: 'anywhere',
      },
    ],
  },
}