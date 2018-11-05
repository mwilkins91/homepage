module.exports = {
	extends: ['airbnb', 'prettier', 'react', "plugin:react/recommended"],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 8,
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			impliedStrict: true,
			classes: true
		}
	},
	env: {
		browser: true,
		node: true,
	},
	rules: {
		'no-unused-vars': [
			1,
			{
				argsIgnorePattern: 'res|next|^err'
			}
		],
		camelcase: 0,
		'no-restricted-syntax': 0,
		'class-methods-use-this': 0,
		'react/jsx-indent': 0,
		'react/sort-comp': 0,
		'react/no-array-index-key': 0,
		'arrow-body-style': [2, 'as-needed'],
		'no-param-reassign': [
			2,
			{
				props: false
			}
		],
        indent: ['error', 2],
		'no-console': 0,
		import: 0,
		'func-names': 0,
		'space-before-function-paren': 0,
		'comma-dangle': 0,
		'max-len': 0,
		'import/extensions': 0,
		'no-underscore-dangle': 0,
		'consistent-return': 0,
		'react/display-name': 1,
		'react/react-in-jsx-scope': 0,
		'react/forbid-prop-types': 0,
		'react/no-unescaped-entities': 0,
		'prefer-destructuring': 0,
		'no-return-assign': 0,
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.js', '.jsx']
			}
		],
		radix: 0,
		'no-shadow': [
			2,
			{
				hoist: 'all',
				allow: ['resolve', 'reject', 'done', 'next', 'err', 'error']
			}
		],
		quotes: [
			2,
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'jsx-a11y/href-no-hash': 'off',
		'jsx-a11y/anchor-is-valid': [
			'warn',
			{
				aspects: ['invalidHref']
			}
		]
	},
	plugins: ['eslint-plugin-html']
};