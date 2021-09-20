<template>
  <div>
    <h1>learning vue testing</h1>
    <div>
      <ul v-for="(todo, idx) in todos" :key="idx">
        <!-- 테스트를 위한 id 속성 추가 -->
        <li data-test="todo">{{ todo.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      todos: [
        { id: 1, text: 'sleep well', completed: false },
        { id: 2, text: 'eat well', completed: false },
      ],
    }
  },
}
</script>
