import { shallowMount } from '@vue/test-utils'
import Parent from '@/components/Parent.vue'

describe('Parent.vue', () => {
  it('test shallow render', () => {
    // shallowMount: 하위 컴포넌트를 포함하지 않고 고립된 컴포넌트 테스트를 원할 때
    const wrapper = shallowMount(Parent)
    expect(wrapper.text()).toContain('Parent')
  })
})
