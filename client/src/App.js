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
      <main className={`container is-fluid`}>
        <AddTodo />
        <ListTodos />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
