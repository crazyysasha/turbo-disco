
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTodosStore = defineStore('todos', () => {
    const newTodoId = ref(3);
    const todos = ref([
        {
            id: 1,
            title: "first todo",
            isCompleted: false,
        },
        {
            id: 2,
            title: "second todo",
            isCompleted: false,
        },
    ]);

    function toggle(id) {
        todos.value = todos.value.map((todo) => {
            if (id == todo.id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        });
    }

    function create(title) {
        todos.value.push({
            id: newTodoId.value++,
            title,
            isCompleted: false,
        });

    }


    function update() {
        
    }


    function destroy(id) {
        todos.value = todos.value.filter(todo => todo.id !== id);
    }

    return { todos, toggle, create, destroy, };
});