module.exports = {
    parser: "babel-eslint",
    extends: [
        "plugin:react/recommended",
        "plugin:prettier/recommended",
        "plugin:jsx-a11y/recommended"
    ],
    plugins: [
        "react",
        "prettier",
        "react-hooks",
        "jsx-a11y"
    ],
    rules: {
        "react/sort-prop-types": ["error", { "sortShapeProp": true }],
        "react/jsx-curly-brace-presence": ["error", { "props": "never", "children": "never" }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "prettier/prettier": "error"
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    overrides: [
        {
            files: [
                '**/__tests__/**/*.test.js'
            ],
            env: {
                jest: true
            }
        },
        {
            files : [
                '*.story.js'
            ],
            rules: {
                "react/prop-types": 0
            }
        }
    ]
}
