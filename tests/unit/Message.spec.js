// component랑 똑같은 이름으로 .spec.js 파일 생성
import { mount } from '@vue/test-utils';
import Message from '@/components/Message.vue'

describe('Message.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = mount(Message, {
      props:{msg: 'hello mihyun'}
    })
    expect(wrapper.text()).toContain('hello mihyun')
  })
})