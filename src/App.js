import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`

function App() {
  return (
    <div>
      <GlobalStyle />
      <Template>
        <CounterContainer />
        <TodosContainer />
      </Template>
    </div>
  );
}

export default App;
