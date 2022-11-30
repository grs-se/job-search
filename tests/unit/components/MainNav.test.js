import { render, screen } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
	const renderMainNav = () => {
		render(MainNav, {
			global: {
				stubs: {
					FontAwesomeIcon: true,
				},
			},
		});
	};

	it("displays company name", () => {
		renderMainNav();
		const companyName = screen.getByText("Boogle Careers");
		expect(companyName).toBeInTheDocument();
	});

	it("displays menu items for navigation", () => {
		renderMainNav();
		const navigationMenuItems = screen.getAllByRole("listitem");
		const navigationMenuTexts = navigationMenuItems.map(
			(item) => item.textContent
		);
		expect(navigationMenuTexts).toEqual([
			"Teams",
			"Locations",
			"Life at Boogle Corp",
			"How we hire",
			"Students",
			"Jobs",
		]);
	});

	describe("when the user logs in", () => {
		it("displays user profile picture", async () => {
			renderMainNav();

			let profileImage = screen.queryByRole("img", {
				name: /user profile image/i,
			});
			expect(profileImage).not.toBeInTheDocument();

			const loginButton = screen.getByRole("button", {
				name: /sign in/i,
			});
			await userEvent.click(loginButton);

			profileImage = screen.getByRole("img", {
				name: /user profile image/i,
			});
			expect(profileImage).toBeInTheDocument();
		});
	});
});

// render(MainNav);

// 			const profileImage = screen.queryByRole("img", {
// 				name: /user profile image/i,
// 			});

// 			expect(profileImage).not.toBeInTheDocument();

// import { render, screen } from "@testing-library/vue";
// import "@testing-library/jest-dom";

// import { mount } from "@vue/test-utils";

// import MainNav from "@/components/MainNav.vue";

// describe("MainNav", () => {
// 	it("displays company name", () => {
// 		render(MainNav, {
// 			global: {
// 				stubs: {
// 					FontAwesomeIcon: true,
// 				},
// 			},
// 		});
// 		const wrapper = mount(MainNav);

// 		expect(wrapper.text()).toMatch("Boogle Careers");
// 	});

// 	it("displays menu items for navigation", () => {
// 		const wrapper = mount(MainNav);
// 		const navigationMenuItems = wrapper.findAll(
// 			"[data-test='main-nav-list-item']"
// 		);
// 		const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
// 		expect(navigationMenuTexts).toEqual([
// 			"Teams",
// 			"Locations",
// 			"Life at Boogle",
// 			"How we hire",
// 			"Students",
// 			"Jobs",
// 		]);
// 	});

// 	describe("when user is logged out", () => {
// 		it("prompts user to sign in", () => {
// 			const wrapper = mount(MainNav);
// 			const loginButton = wrapper.find("[data-test='login-button']");
// 			expect(loginButton.exists()).toBe(true);
// 		});
// 	});

// 	describe("when user logs in", () => {
// 		it("displays user profile picture", async () => {
// 			const wrapper = mount(MainNav);
// 			let profileImage = wrapper.find("[data-test='profile-image']");
// 			expect(profileImage.exists()).toBe(false);

// 			const loginButton = wrapper.find("[data-test='login-button']");
// 			await loginButton.trigger("click");

// 			profileImage = wrapper.find("[data-test='profile-image']");
// 			expect(profileImage.exists()).toBe(true);
// 		});
// 	});
// });

// // render(MainNav);

// // 			const profileImage = screen.queryByRole("img", {
// // 				name: /user profile image/i,
// // 			});

// // 			expect(profileImage).not.toBeInTheDocument();
