import { mount } from '@vue/test-utils'
import TodoApp from '@/components/TodoApp.vue'

describe('TodoApp.vue', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TodoApp)
  })

  it('should render todo text', () => {
    // 특정 요소를 찾아서 테스트
    const todo = wrapper.get('[data-test="todo"]')
    expect(todo.text()).toBe('sleep well')
  })

  it('should add new todo', async () => {
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)

    await wrapper.get('[data-test="new-todo"]').setValue('New Todo')
    await wrapper.get('[data-test="form"]').trigger('submit') // 아주 많은 이벤트를 트리거할 수 있다

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(3)
  })

  it('should be able to complete todo', async () => {
    await wrapper.get('[data-test="todo-checkbox"]').setValue(true)

    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')
  })
})
