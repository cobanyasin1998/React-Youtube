import React from "react";
import { useReducer, useState, useCallback, useMemo } from "react";
import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import reducer from "./reducers/todoReducers";
const Memoization = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
    search: "",
  });

  const [count, setCount] = useState(0);

  // const [todos, setTodos] = useState([]);
  // const [todo, setTodo] = useState();

  // const submitHandle = useCallback(e => {
  //   e.preventDefault();

  //   dispatch({
  //     type: "ADD_TODO",
  //     todo: state.todo,
  //   });
  // };

  const submitHandle = useCallback(
    (e) => {
      e.preventDefault();
      // setTodos([...todos, todo]);
      // setTodo("");
      dispatch({
        type: "ADD_TODO",
        todo: state.todo,
      });
    },
    [state.todo]
  );

  const changeTodo = useCallback((e) => {
    //setTodo(e);
    dispatch({
      type: "SET_TODO",
      value: e,
    });
  }, []);

  const searchHandle = (e) => {
    dispatch({
      type: "SET_SEARCH",
      value: e.target.value,
    });
  };

  const filteredTodos = useMemo(() => {
    return state.todos.filter((todo) =>
      todo.toLocaleLowerCase("TR").includes(state.search.toLocaleLowerCase())
    );
  }, [state.todos, state.search]);

  return (
    <>
      <h1>Todo App</h1>
      <h3>{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>Arttır</button>
      <hr></hr>

      <Header></Header>
      <input
        value={state.search}
        type="text"
        placeholder="Todolarda Ara"
        onChange={searchHandle}
      />
      <AddTodo
        submitHandle={submitHandle}
        changeTodo={changeTodo}
        todo={state.todo}
      ></AddTodo>
      <Todos todosParam={filteredTodos}></Todos>
    </>
  );
};

export default Memoization;
