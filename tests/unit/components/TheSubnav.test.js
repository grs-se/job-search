import { render, screen } from "@testing-library/vue";
import "@testing-library/jest-dom";

import TheSubnav from "@/components/TheSubnav.vue";

describe("TheSubnav", () => {
	describe("when user is on jobs page", () => {
		it("displays job count", () => {
			render(TheSubnav, {
				global: {
					stubs: {
						FontAwesomeIcon: true,
					},
				},
				data() {
					return {
						onJobsResultsPage: true,
					};
				},
			});

			const jobCount = screen.getByText("1654");

			expect(jobCount).toBeInTheDocument();
		});
	});
	describe("when user is not on jobs page", () => {
		it("does NOT display job count", () => {
			render(TheSubnav, {
				global: {
					stubs: {
						FontAwesomeIcon: true,
					},
				},
				data() {
					return {
						onJobsResultsPage: false,
					};
				},
			});

			const jobCount = screen.queryByText("1654");

			expect(jobCount).not.toBeInTheDocument();
		});
	});
});
