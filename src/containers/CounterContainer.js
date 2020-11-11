/*
  컨테이너 컴포넌트 
  리덕스 스토어의 상태를 조회하거나, 액션을 디스패치 할 수 있는 컴포넌트
  html 태그들을 사용하지 않고 다른 프레젠테이셔널 컴포넌트들을 불러와서 사용함 
*/
import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector 는 리덕스 스토어의 상태를 조회하는 hook 
  const { number, diff } = useSelector((state) => ({
    number: state.counter.number,
    diff: state.counter.diff
  }), shallowEqual);

  // useDispatch 는 리덕스 스토어의 dispatch를 함수에서 사용 할 수 있게 해주는 hook 
  const dispatch = useDispatch();
  // 각 액션들을 dispatch하는 함수 생성 
  const onIncrease = () => dispatch(increase())
  const onDecrease = () => dispatch(decrease())
  const onSetDiff = (diff) => dispatch(setDiff(diff))

  // props로 프레젠테이셔널 컴포넌트에게 data 전달 
  return (
    <Counter 
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  )
}

export default CounterContainer;