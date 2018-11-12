const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	moduleFileExtensions: [
		...tsjPreset.moduleFileExtensions,
		'vue'
	],
	transform: {
		...tsjPreset.transform,
		'.*\\.(vue)$': 'vue-jest'
	},
	testMatch: [
		...tsjPreset.testMatch
	]
};
