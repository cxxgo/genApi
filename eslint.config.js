import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'quote-props': 'off',
    'n/prefer-global/process': 'off',
    'no-console': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    'regexp/no-unused-capturing-group': 'off',
    'regexp/no-useless-quantifier': 'off',
  },
  ignores: ['./__test__', './README.md'],
})
