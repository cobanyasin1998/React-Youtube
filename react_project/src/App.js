import { useReducer } from "react";
import reducer from "./reducers/todoReducers";

function App() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
  });

  // const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState();

  const submitHandle = (e) => {
    e.preventDefault();
    // setTodos([...todos, todo]);
    // setTodo("");
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
    });
  };

  const changeTodo = (e) => {
    //setTodo(e);
    dispatch({
      type: "SET_TODO",
      value: e,
    });
  };

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={state.todo}
          onChange={(e) => changeTodo(e.target.value)}
        />
        <button disabled={!state.todo} type="submit">
          Ekle
        </button>
      </form>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
