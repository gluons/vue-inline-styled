<template>
	<div>
		{{ text }}
	</div>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue';

export default Vue.extend({
	name: 'App',
	data() {
		return {
			text: 'Hello, World!'
		};
	}
});
</script>
