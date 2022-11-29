<template>
	<!-- Using v-bind to connect a computed property, logic the same as data 	property. -->
	<button :class="buttonClass">
		{{ text }}
	</button>
</template>

<script>
export default {
	name: "ActionButton",
	props: ["text", "type"],
	computed: {
		buttonClass() {
			return {
				[this.type]: true, // { primary: true }
			};
		},
	},
};
</script>

<style scoped>
button {
	@apply px-5 py-3 rounded font-medium;
}
.primary {
	@apply text-white bg-brand-blue-1 hover:shadow-blue;
}
.secondary {
	@apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}
</style>
