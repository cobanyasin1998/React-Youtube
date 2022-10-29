import { memo } from "react";

function TodoItem({ index, todo }) {
  return (
    <>
     
      <li key={index}>{todo}</li>
    </>
  );
}
export default memo(TodoItem);
