import React from "react";

class App extends React.Component {
  render(){
    return (
      <div>
        <h1> Hola </h1>
      </div>
    )
  }
}


export default App;

/*
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import ContactCard from "./ContactCard"; 

<Header />
  <MainContent></MainContent>
  <ContactCard 
    contact= {{name:"Objeto1", imgUrl:"", phone:"Objeto1", email:"objeto1"}}
  />

  <ContactCard 
    contact= {{name:"Objeto2", imgUrl:"", phone:"Objeto2", email:"Objeto2"}}    
  />
    
  <Footer />
*/

//--------------------------------------

    
/*

import Joke from "./Joke"
import jokesData from "./jokesData"

function App(){
  const jokeComponents = jokesData.map(Joke => <Joke question={joke.question} 
    punchLine={joke.punchLine} />)

  return(
    <div>
      {jokeComponents}
    </div>
  )
}
*/

//--------------------------------------------

/* 
import todosData from "./todosData"
import TodoItem from "./TodoItem"


function App(){

  const todoItems = todosData.map(item => <TodoItem key item={item}/>)

  return(
    <div className="todo-list">
      {todoItems}
    </div>
  )
}
*/

//-----------------------------------

/*
class App extends React.Component{

  //Usamos {this.props.name} dentro de clases
  render(){
    return (
      <div>
        <h1> Code goes here</h1>
      </div>
    )
  }
}
*/