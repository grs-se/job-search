import { cleanup } from "@trsting-library/vue";
import matchers from "@testing-library/jest-dom/matchers";
import { expect, afterEach } from "vitest";

expect.extend(matchers);

afterEach(() => {
	cleanup();
});
