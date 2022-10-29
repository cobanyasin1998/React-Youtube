import TodoItem from "./TodoItem";
import {memo} from 'react';
function Todos({ todosParam }) {
    console.log(todosParam);
  return (
    
    <>
      <ul>
        {todosParam.map((todo, index) => (
          <TodoItem index={index} todo={todo}></TodoItem>
        ))}
      </ul>
    </>
  );
}
export default memo(Todos);
