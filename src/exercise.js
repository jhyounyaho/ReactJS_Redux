import { createStore } from 'redux';

// 리덕스에서 관리 할 상태 정의  
const initialState = {
  counter: 0,
  text: '',
  list: []
}

// action type 정의 - 대문자 작성 
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

// action 생성함수 (Action Creator) 정의 - camelCase 작성 
// type 값 필수 
const increase = () => ({ 
  type: INCREASE 
});
const decrease = () => ({ 
  type: DECREASE 
});
const changeText = (text) => ({ 
  type: CHANGE_TEXT,
  text
});
const addToList = (item) => ({
  type: ADD_TO_LIST,
  item
})

// reducer 만들기 
// state 파라미터 초깃값 설정 
// 불변성을 지켜줘야 한다. 
function reducer(state = initialState, action) {
  // 상태 업데이트 로직 
  switch(action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.text
      }
    case 'ADD_TO_LIST':
      return {
        ...state,
        // 불변성을 위해 push로 추가하면 X 
        list: state.list.concat(action.item)
      }
    default:
      // reducer 에서는 default 에 state를 반환한다. 
      return state;
  }
}

// store 생성 
const store = createStore(reducer);

// 스토어 안에 들어있는 상태가 바뀔 때마다 호출되는 listener 함수  
const listener = () => {
  const state = store.getState();
  console.log(state)
}

// 구독 해제 시 호출 
const unsubscribe = store.subscribe(listener);

// 액션들 dispatch 
/*
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: 'hi'}));
*/
