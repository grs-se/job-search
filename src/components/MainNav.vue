<template>
	<header class="w-full text-sm">
		<div class="fixed top-0 left-0 w-full h-16 bg-white">
			<div
				class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
			>
				<a :href="url" class="flex items-center h-full text-xl">{{
					company
				}}</a>

				<nav class="h-full ml-12">
					<ul class="flex h-full p-0 m-0 list-none">
						<li
							v-for="menuItem in menuItems"
							:key="menuItem"
							data-test="main-nav-list-item"
							class="h-full ml-9 first:ml-0"
						>
							<a href="" class="flex items-center h-full py-2.5">{{
								menuItem
							}}</a>
						</li>
					</ul>
				</nav>

				<div class="flex items-center h-full ml-auto">
					<profile-image v-if="isLoggedIn" data-test="profile-image" />
					<action-button
						v-else
						text="Sign in"
						type="primary"
						data-test="login-button"
						@:click="loginUser"
					/>
				</div>
			</div>

			<the-subnav v-if="isLoggedIn" />
		</div>
	</header>
</template>

<script>
import ActionButton from "@/components/ActionButton.vue";
import ProfileImage from "@/components/ProfileImage.vue";
import TheSubnav from "@/components/TheSubnav.vue";
export default {
	name: "MainNav",
	components: {
		ActionButton,
		ProfileImage,
		TheSubnav,
	},
	data() {
		return {
			company: "Boogle Careers",
			url: "https://careers.google.com",
			menuItems: [
				"Teams",
				"Locations",
				"Life at Boogle Corp",
				"How we hire",
				"Students",
				"Jobs",
			],
			isLoggedIn: false,
		};
	},
	methods: {
		loginUser() {
			this.isLoggedIn = true;
		},
	},
};
</script>
