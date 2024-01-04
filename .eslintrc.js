module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:react-hooks/recommended',
      'plugin:prettier/recommended',  
      'eslint:recommended',
      "prettier",          
  ],  
  parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true,
      },
  },
  rules: {
      'react/react-in-jsx-scope': 'off',
      "no-unused-vars": "off",
  
  },
  settings: {
      react: {
          version: 'detect',
      },
  }
}