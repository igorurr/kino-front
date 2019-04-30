import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom';
import { routerReducer } from 'react-router-redux';

import { createStore } from "../helpers/Store/";
import { createRoutes, createRouterHistory, AppRouter } from "../helpers/Router/";

import { ProviderScaleCheck } from '../modules/WindowScaleCheck/';

import { RenderDevTools } from "../modules/DevTools/";

import routes from "../pages/routes";

import envsReducers from "../envs/reducers";

import AppContent from "./AppContent";

export const __DEV__ = true; // кайф костыль, убери когда серверсайд потянешь

const reducers = {
  routing: routerReducer,
  ...envsReducers
};

const middlewares = {

};

const store = createStore( reducers, middlewares )

const history = createRouterHistory( store );

// чекаем наличие fetch либо грузим его полифил
// чекаем наличие promise либо грузим его полифил

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <AppRouter>
        <AppContent>
          <ProviderScaleCheck>
            {__DEV__ && <RenderDevTools store={store} />}
            {createRoutes( routes )}
          </ProviderScaleCheck>
        </AppContent>
      </AppRouter>
    </Router>
  </Provider>
);

//ReactDOM.render(<App />, document.getElementById('root'));