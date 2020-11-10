// Redux Module - todos  

// action 
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO = 'todos/TOGGLE_TODO'

// action creater 
let nextId = 1; // todo 데이터에서 사용 할 고유 id 
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text
  }
})
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id
})

// default 
const initialState = [
  /* 배열 안에 들어갈 객체 형태 
    {
    id: 1,
    text: '예시',
    done: false
  } 
  */
]

// reducer 
export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat(action.todo)
    case 'TOGGLE_TODO':
      return state.map(
        (todo) => todo.id === action.id 
        ? {...todo, done: !todo.done}
        : todo
      )
    default: 
      return state;
  }
}