module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        map: [
          ['components', './components'],
          ['containers', './containers'],
          ['hooks', './hooks'],
          ['services', './services'],
          ['constants', './constants'],
          ['theme', './theme'],
          ['helpers', './helpers'],
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'react/function-component-definition': [
      0,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'external',
          'builtin',
          'internal',
          'sibling',
          'parent',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'components/**',
            group: 'internal',
          },
          {
            pattern: 'containers/**',
            group: 'internal',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
          },
          {
            pattern: 'hooks/**',
            group: 'internal',
          },
          {
            pattern: 'services/**',
            group: 'internal',
          },
          {
            pattern: 'constants/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'theme/**',
            group: 'internal',
            position: 'after',
          },
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'no-plusplus': 0,
    'max-classes-per-file': 0,
    'react/no-array-index-key': 0,
    'consistent-return': 0,
    'no-restricted-syntax': 0,
    'array-callback-return': 0,
    'default-case': 0,
    'react/prefer-stateless-function': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-param-reassign': 0,
    'prefer-destructuring': 0,
    'react/require-default-props': 0,
    'no-shadow': 0,
    'import/no-cycle': 0,
    'react-hooks/exhaustive-deps': ['warn'],
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'no-use-before-define': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};
