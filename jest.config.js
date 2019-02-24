const { defaults } = require('jest-config');

module.exports = {
	moduleFileExtensions: [...defaults.moduleFileExtensions, 'vue'],
	transform: {
		'^.+\\.ts$': 'babel-jest',
		'^.+\\.vue$': 'vue-jest'
	}
};
