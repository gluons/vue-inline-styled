import styleToObject from 'style-to-object';
import Vue, { VueConstructor } from 'vue';

function inlineStyled<V extends Vue>(component: VueConstructor<V>) {
	return ([styleStr]: TemplateStringsArray) => {
		const styleObj = styleToObject(styleStr);

		return Vue.extend({
			functional: true,
			render(createElement, { data, children }) {
				return createElement(
					component,
					{
						...data,
						style: styleObj
					},
					children
				);
			}
		});
	};
}

export default inlineStyled;
