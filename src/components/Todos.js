/*
  프레젠테이셔널 컴포넌트 
  리덕스 스토어에서 직접적으로 접근하지 않고 
  필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트 
  UI를 선언하는 것에 집중한다. 
*/
import React, { useState } from "react";
import styled from 'styled-components';

const TodosBlock = styled.div`
  width: 100%;
  left: 0;
  ul {
    list-style:none
  }
  li {
    margin-bottom: 10px;
  }

  button {
    height: 46px;
    width: 70px;
    background-color: #9c36b5;
    color: #f8f0fc;
    border-radius: 3px;
    border: 0px;
    vertical-align: middle;
    font-size: 20px;
    cursor: pointer;
  }
`;

const InsertForm = styled.form`
  padding: 32px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 80%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
  margin-right: 15px;
`;

const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  console.log(todo)
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
      onClick={() => onToggle(todo.id)}
    >
      {todo.id}. {todo.text}
    </li>
  );
});

const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle}></TodoItem>
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);
  const onSubmit = (e) => {
    // 새로고침 방지
    e.preventDefault();
    // text 추가
    onCreate(text);
    // text 초기화
    setText("");
  };

  return (
    <TodosBlock>
      <InsertForm onSubmit={onSubmit}>
        <Input
          value={text}
          onChange={onChange}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">등록</button>
      </InsertForm>
      <TodoList todos={todos} onToggle={onToggle} />
    </TodosBlock>
  );
}

export default React.memo(Todos);