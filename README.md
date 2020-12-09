# Redux 로 상태 관리

![redux](https://user-images.githubusercontent.com/42309919/98617823-2fffb400-2343-11eb-9627-71ae83170af5.png)

## 설치 라이브러리

yarn add redux  
yarn add react-redux
yarn add redux-devtools-extension

## 상태관리

Redux

## 리덕스 모듈 패턴

Ducks pattern
https://github.com/erikras/ducks-modular-redux

프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 패턴 사용

## 디렉토리

src/components // 프레젠테이셔널 컴포넌트      
src/containers // 컨테이너 컴포넌트              
src/modules // redux module               
                   
## 리덕스 모듈                   
src/modules/counter.js                   
- number, diff 관리                      
- action type : SET_DIFF, INCREASE, DECREASE         
                   
src/modules/todos.js                   
- [] 할일 목록 객체가 들어갈 빈배열                   
- action type: ADD_TODO, TOGGLE_TODO                    
                   
src/modules/index.js                   
- root Reducer                     
                                                         
## 최적화

React.memo
shallowEqual // 컨테이너 컴포넌트가 필요한 상황에서만 리렌더링 될 것

## 구현기능

counter - 입력받은 숫자로 +, - 클릭시 결과 노출
todos - 할 일 입력시 하단에 할 일 목록 노출

## 결과 화면       
![redux2](https://user-images.githubusercontent.com/42309919/98781926-7c79eb00-243a-11eb-98fa-d50cc55609c4.PNG)       
               
