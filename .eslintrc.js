module.exports = {
    root: true,
    parser: 'babel-eslint',
    env: {
        browser: true,
        node: true
    },
    extends: 'airbnb-base',
    plugins: [
        'html'
    ],
    rules: {
        "comma-dangle": ["error", {"arrays": "never"}],
        "indent": ["error", 4, {"SwitchCase": 1}],
        "default-case": 0,
        "no-multi-spaces": ["error", { exceptions: { "ImportDeclaration": true } }],
        "no-trailing-spaces": ["error", { "skipBlankLines": true }],
        "import/no-unresolved": [2, { ignore: ['^@', '^~'] }], // FIXME:
        "import/extensions": 0, // FIXME:
        "no-shadow": ["error", { "allow": ["state"] }],
        "no-param-reassign": ["error", { "props": false }],
        "no-plusplus": 0,
        "camelcase": 0
    },
    globals: {}
};
