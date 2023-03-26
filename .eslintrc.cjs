/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
		'vue/setup-compiler-macros': true
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/eslint-config-typescript/recommended'
	],
	rules: {
		'@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/no-non-null-assertion': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'vue/require-default-prop': 'off',
		'vue/multi-word-component-names': 'off',
		quotes: [0, 'double'],
		semi: ['error', 'always'],
		'space-before-function-paren': [0, 'always'],
		camelcase: [0, 'always'],
		'no-trailing-spaces': [0, 'always'],
		'no-debugger': [0, 'always'],
		'eol-last': [0, 'always'],
		'object-property-newline': [0, 'always'],
		'object-curly-newline': [0, 'always'],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
	},
	overrides: [
		{
			files: ['*.js'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': 'off'
			}
		}
	]
};
