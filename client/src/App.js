import React, { Fragment } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <Header />
      <div className={`container is-fluid`}>
        <AddTodo />
        <ListTodos />
      </div>
      <Footer />
    </Fragment>
  );
}

export default App;
