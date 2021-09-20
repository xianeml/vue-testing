<template>
  <div>
    <h1>learning vue testing</h1>
    <div
      v-for="todo in todos"
      :key="todo.id"
      data-test="todo"
      :class="todo.completed ? 'completed' : ''"
    >
      {{ todo.text }}
      <input
        v-model="todo.completed"
        type="checkbox"
        data-test="todo-checkbox"
      />
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

<style>
.completed {
  text-decoration: line-through;
}
</style>
