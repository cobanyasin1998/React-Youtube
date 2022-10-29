import { memo } from "react";

function AddTodo({submitHandle,changeTodo,todo}) {
  return (
    <>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          value={todo}
          onChange={(e) => changeTodo(e.target.value)}
        />
        <button disabled={!todo} type="submit">
          Ekle
        </button>
      </form>
    </>
  );
}

export default memo(AddTodo);
