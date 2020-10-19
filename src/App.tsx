import React, { FC } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AsyncLoad } from './components/async-load';
import { routes } from './routes';
import vars from './styleVars';
import './App.less';

console.log(vars);

const App: FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        {
          routes.map(item => (
            <Route exact={item.exact} path={item.path} key={item.path}>
              <AsyncLoad load={item.component}/>
            </Route>
          ))
        }
      </Switch>
    </BrowserRouter>
  );
};

export default App;
