import React from 'react';
import './App.css';
// import TodoUseState from './Todo/TodoUseState'
// import TodoList from './Todo/TodoList'
// import GitUserSearchComponent from './GitUserSearch/GitUserSearchComponent'
// import GitUserSearchComponent from './GitUserSearch/GitUserSearchComponent'
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import HomePage from './Routing/HomePage';
// import LoginPage from './Routing/LoginPage';
// import SuccessLogin from './Routing/SuccessLogin';
// import withHoc from './HocOne/withHOC'
// import NewComponent from './HocOne/NewComponent';
import LoginPage from './Login/LoginPage';


// function NewComponent() {
//   return withHoc(TodoList)
// }

function App() {
  return (
    // <BrowserRouter>
      <div className="App">
        {/* <TodoList /> */}
        {/* <TodoUseState /> */}
        {/* <GitUserSearchComponent /> */}
        {/* <GitUserSearchComponent /> */}
    
        {/* <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/loginPage" component={LoginPage}/>
          <Route path="/successLogin" component={SuccessLogin}/>
        </Switch> */}

        {/* {withHOC(TodoUseState)} */}

        {/* <NewComponent /> */}
        <LoginPage />
    
    </div>
  // </BrowserRouter>
  );
}

export default App;
