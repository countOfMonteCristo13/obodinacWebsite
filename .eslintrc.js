module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['./src'],
      },
    },
  },
  rules: {
    'no-use-before-define': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'implicit-arrow-linebreak': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    'arrow-body-style': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-vars': 0,
    'no-extra-boolean-cast': 0,
    'no-shadow': 0,
    'react/button-has-type': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/function-component-definition': 'off',
    'react/no-unescaped-entities': 'off',
    'spaced-comment': 'off',
    'react/jsx-boolean-value': 'off',
    'no-nested-ternary': 'off',
  },
};
