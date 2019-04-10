import { createStore as cs, applyMiddleware, compose, combineReducers } from 'redux';
import _ from "lodash";
import { composeWithDevTools } from 'redux-devtools-extension';

const __DEV__ = true; // кайф костыль, убери когда серверсайд потянешь

export const createStore = (
  reducers,
  middlewares
) => {
  const reducer = combineReducers( reducers );

  return cs(
    reducer, 
    // если middlewares пуст - выкидывает ошибку
    composeWithDevTools( 
      _.isEmpty(middlewares) ? applyMiddleware() : applyMiddleware( middlewares )
    )
  );
};