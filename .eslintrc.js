module.exports = {
    root: true,
    env: {
        es2020: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended',
    ],
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        curly: 'off',
        'no-console': 'off',
        'no-sparse-arrays': 'off',
        'object-curly-spacing': ['error', 'always'],
        'object-shorthand': ['error', 'always'],
        '@typescript-eslint/ban-types': ['error', { types: { '{}': false } }],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
};
