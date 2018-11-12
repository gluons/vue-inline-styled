# Vue Inline Styled
[![GitHub](https://img.shields.io/github/license/gluons/vue-inline-styled.svg?style=flat-square)](./LICENSE)
[![npm](https://img.shields.io/npm/v/vue-inline-styled.svg?style=flat-square)](https://www.npmjs.com/package/vue-inline-styled)
[![npm](https://img.shields.io/npm/dt/vue-inline-styled.svg?style=flat-square)](https://www.npmjs.com/package/vue-inline-styled)
[![TSLint](https://img.shields.io/badge/TSLint-gluons-15757B.svg?style=flat-square)](https://github.com/gluons/tslint-config-gluons)

Writing inline CSS style in Vue component with ease.

> Use [style-to-object](https://github.com/remarkablemark/style-to-object) under the hood.

## Installation

**Via npm:**

```bash
npm install vue-inline-styled
```

**Via Yarn:**

```bash
yarn add vue-inline-styled
```

## Usage

```js
import Vue from 'vue';
import inlineStyled from 'vue-inline-styled';

import MyComponent from './components/MyComponent.vue';

const StyledMyComponent = inlineStyled(MyComponent)`
	color: red;
	font-size: 20px;
	background-color: yellow;
`;

new Vue({
	el: '#app',
	// Component will be renderred with inline style
	render: h => h(StyledMyComponent)
});
```
