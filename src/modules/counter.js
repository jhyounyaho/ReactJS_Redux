// Redux Module - counter 

// action type 
// Ducks 패턴을 따를땐 액션의 이름에 접두사 넣기 (다른 모듈과 액션 이름 중복 방지)
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action Creator
export const setDiff = (diff) => ({
  type: SET_DIFF,
  diff
})
export const increase = () => ({
  type: INCREASE
})
export const decrease = () => ({
  type: DECREASE
})

// default 
const initialState = {
  number: 0,
  diff: 1
}

// Reducer
export default function counter(state = initialState, action) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff
      }
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff
      }
    case DECREASE: 
      return {
        ...state,
        number: state.number - state.diff
      }
    default:
      return state;
  }
}