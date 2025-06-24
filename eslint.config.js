import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'quote-props': 'off',
    'n/prefer-global/process': 'off',
    'no-console': 'warn',
  },
  ignores: ['./__test__'],
})
