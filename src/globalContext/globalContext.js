import React from 'react';
import {initialState, reducer} from './globalReducer';

import useReducer from './useReducer';

const Context = React.createContext();

function Provider({ children, value }) {
  const [state, dispatch] = useReducer(reducer, initialState());

  return (
    <Context.Provider value={{ ...value , state, dispatch }}>
      {children}
    </Context.Provider>
  );
}

export { Context, Provider };
