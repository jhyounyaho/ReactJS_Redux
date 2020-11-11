/*
  컨테이너 컴포넌트 
  리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트
  html 태그들을 사용하지 않고 다른 프레젠테이셔널 컴포넌트들을 불러와서 사용함 
*/
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, toggleTodo } from '../modules/todos';

function TodosContainer() {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const onCreate = useCallback(text => dispatch(addTodo(text)), [dispatch]);
  const onToggle = useCallback(id => dispatch(toggleTodo(id)), [dispatch]);

  return <Todos 
    todos={todos} 
    onCreate={onCreate}
    onToggle={onToggle}
  />
}

export default TodosContainer;