import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: globals.node,
      parser: parser
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error'
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended
]
