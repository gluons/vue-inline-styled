const { resolve } = require('path');

module.exports = {
	entry: resolve(__dirname, './dev/main.ts'),
	output: {
		html: {
			title: 'Vue Inline Styled'
		}
	},
	plugins: [
		{
			resolve: '@poi/plugin-typescript'
		}
	]
};
