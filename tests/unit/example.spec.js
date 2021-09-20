import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  /* 
    we can have multiple testing blocks in this component
    it() : test block
    params1: this is a test name. messaging
    params2: callback
  */
  it('renders props.msg when passed', () => {
    const msg = 'new message'

    // component we want to test
    // 마운트된 컴포넌트 객체 리턴
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    // Assertion: 해당 컴포넌트에 프랍스가 정상적으로 전달되었는지 테스트
    // 래퍼에 있는 텍스트에 msg랑 매치되는게 있냐
    expect(wrapper.text()).toMatch(msg)
  })
})
