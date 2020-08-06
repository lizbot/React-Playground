import React, { Fragment } from 'react';
import lizFaceSmilingAtCaseyWedding from './liz wedding.PNG';
import './App.css';

function App() {
  const [toDoList, setToDoList] = React.useState(["Liz", "Vicki", "programming", "girls"]);
  const clickList = ["The Best", "The Bestest", "words", "women"];

  return (
    <div className="App App-header">
      {/* <img src={lizFaceSmilingAtCaseyWedding} alt="Face of Liz Miner"/> */}
      {/* List component */}
      <List myTodoListOfLadies={toDoList} myClickList={clickList} setToDoList={setToDoList} />
    </div>
  );
}

function List(props) {
  return (
    <>
      {props.myTodoListOfLadies.map((itemToBeRendered, index) => {
        return (
          <div key={index}>
            <button className="App-button" onClick={() => removeItem(props.setToDoList, props.myTodoListOfLadies, itemToBeRendered)}>
              Complete
            </button>
            {itemToBeRendered}
          </div>
        )
      })}
    </>
  )
}

function removeItem(setToDoList, myTodoListOfLadies, itemToBeRendered) {
  setToDoList(
    myTodoListOfLadies.filter(item => {
      return item !== itemToBeRendered
    })
  )
}

export default App;