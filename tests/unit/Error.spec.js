import { shallowMount } from "@vue/test-utils";
import Error from "@/components/Error.vue";

describe("Error.vue", () => {
  it("should render correct contents", () => {
    const msg = "页面错误，点击页面刷新！";
    const wrapper = shallowMount(Error, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
