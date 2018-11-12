const { resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, './dev/main.ts'),
	html: {
		title: 'Vue Inline Styled'
	},
	plugins: [
		{
			resolve: '@poi/plugin-ts-check'
		}
	]
};
