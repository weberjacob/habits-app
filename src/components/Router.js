// import React from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import HabitFinder from './HabitFinder';
// import App from './App';
// import NotFound from './NotFound';

// const Router = () => (
//   <BrowserRouter>
//     <Switch>
//       <Route exact path="/" component={HabitFinder} />
//       <Route path="/habits/:habitListId" component={App} />
//       <Route component={ NotFound } />
//     </Switch>
//   </BrowserRouter>
// )

// export default Router;


import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import App from './App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/habits" component={App} />
      <Route path="/login" component={Login} />
      <Redirect from='*' to='/login' />
    </Switch>
  </BrowserRouter>
);

export default Router;