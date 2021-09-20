import { mount } from '@vue/test-utils';
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  it('should render todo text', () => {
    const wrapper = mount(TodoApp)

    // 특정 요소를 찾아서 테스트
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('sleep well')
  })
})