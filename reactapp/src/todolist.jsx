function Todolist() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a project", completed: true },
    ]);
    const [input, setInput] = useState(""); 
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput("");
        }
    };  
    return (
        <div>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} 
            placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        onClick={() => toggleComplete(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );  
}   

export default Todolist;