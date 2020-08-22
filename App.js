import React from 'react';
import MyNavigationContainer from './src/routes/routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './src/reducers'
const store = createStore(reducers)
export default function App() {
  return (
    <Provider store={store}>
      <MyNavigationContainer />
    </Provider>
  );
}