import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <>
      <Header />
        <main className={`container is-fluid`}>
          <AddTodo />
          <ListTodos />
        </main>
      <Footer />
    </>
  );
}

export default App;
