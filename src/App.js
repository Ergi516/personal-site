import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header';


const routes = [
  {path: '/', name: 'Home', Component: Home},
  {path: '/about', name: 'About', Component: About}
]
const App = () => {
  return (
    <>
    <Header />
    <div className="container">
    {routes.map(({path, Component }) => (
      <Route key="name" path={path} exact>
        <div className="page">
          <Component />
        </div>
      </Route>
    ))}
    </div>
    </>
  );
}

export default App;
