import { useState } from 'react'

function TodoList() {
const [todos, setTodos] = useState([]);
const [input, setInput] = useState("");
const addTodo = () => {
    if (input.trim()) {
setTodos([...todos, { id: Date.now(), task: input, completed: false }]);
setInput("");
}
};
return (
<div>
<input
type="text"
value={input}
onChange={(e) => setInput(e.target.value  )}
placeholder="Add a new task"
/>
<button onClick={addTodo}>Add</button>
<ul>
{todos.map((todo) => (
<li key={todo.id}>{todo.task}</li>
))}
</ul>
</div>
);
}
export default TodoList;