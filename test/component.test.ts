/// <reference path='../dev/sfc.d.ts' />

import { mount } from '@vue/test-utils';

import App from '../dev/App.vue';
import inlineStyled from '../src';

const StyledApp = inlineStyled(App)`
	color: red;
	font-size: 20px;
	background-color: yellow;
`;

describe('Component', () => {
	const wrapper = mount(StyledApp);

	it('should have expected inline styles', () => {
		const { element } = wrapper;

		expect(element.style.color).toEqual('red');
		expect(element.style.fontSize).toEqual('20px');
		expect(element.style.backgroundColor).toEqual('yellow');
	});
});
