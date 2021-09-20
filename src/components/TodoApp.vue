<template>
  <div>
    <h1>learning vue testing</h1>
    <div>
      <ul v-for="(todo, idx) in todos" :key="idx">
        <!-- 테스트를 위한 id 속성 추가 -->
        <li data-test="todo">{{ todo.text }}</li>
      </ul>
    </div>
    <form data-test="form" @submit.prevent="createTodo">
      <input data-test="new-todo" v-model="newTodo" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      newTodo: '',
      todos: [
        { id: 1, text: 'sleep well', completed: false },
        { id: 2, text: 'eat well', completed: false },
      ],
    }
  },
  methods: {
    createTodo() {
      this.todos.push({ id: 3, text: this.newTodo, completed: false })
      this.newTodo = ''
    },
  },
}
</script>
