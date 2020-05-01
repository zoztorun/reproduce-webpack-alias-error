import { shallowMount } from '@vue/test-utils';
import Home from '@/components/routes/home/Home.vue';

describe('Home.vue', () => {
  it("mounts a component and prints the counts", () => {
    const wrapper = shallowMount(Home);
    const vm = wrapper.vm;
    expect(vm.dummy).toBe(0)
  });
})