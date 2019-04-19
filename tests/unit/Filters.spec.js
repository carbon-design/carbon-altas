import * as Filters from "@/filters/index.js";

describe("filters.js", () => {
  it("should be uppercase", () => {
    expect(Filters.uppercase("abc")).toEqual("ABC");
  });
});
