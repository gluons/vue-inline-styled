const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	moduleFileExtensions: [].concat(tsjPreset.moduleFileExtensions, ['vue']),
	transform: Object.assign({}, tsjPreset.transform, {
		'.*\\.(vue)$': 'vue-jest'
	}),
	testMatch: tsjPreset.testMatch
};
