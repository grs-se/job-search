<template>
	<img
		:src="imageLink"
		alt="user profile image"
		class="w-8 h-8 object-contain rounded-3xl"
	/>
</template>

<script>
export default {
	name: "ProfileImage",
	data() {
		return {
			imageLink:
				"https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
		};
	},
};
</script>
