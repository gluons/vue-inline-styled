/// <reference path='sfc.d.ts' />

import Vue from 'vue';

import inlineStyled from '../src';
import App from './App.vue';

const StyledApp = inlineStyled(App)`
	color: red;
	font-size: 20px;
	background-color: yellow;
`;

new Vue({
	el: '#app',
	render: h => h(StyledApp)
});
