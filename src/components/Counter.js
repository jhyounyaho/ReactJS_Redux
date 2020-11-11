/*
  프레젠테이셔널 컴포넌트 
  리덕스 스토어에서 직접적으로 접근하지 않고 
  필요한 값 또는 함수를 props 로만 받아와서 사용하는 컴포넌트 
  UI를 선언하는 것에 집중한다. 
*/
import React from "react";
import styled from 'styled-components';

const CounterBlock = styled.div`
  padding: 32px;
  left: 0;
  background-color: #eebefa;

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
    margin-left: 15px;
  }
`;
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 60%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
  const onChange = (e) => {
    onSetDiff(parseInt(e.target.value, 10));
  };
  return (
    <CounterBlock>
      <h1>{number}</h1>
      <div>
        <Input type="number" value={diff} onChange={onChange} />
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
      </div>
    </CounterBlock>
  );
}

export default Counter;