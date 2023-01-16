import React, {useState} from 'react';
import './App.css';
import AddToList from './components/AddToList';
import List from './components/List';

export interface IState {
  people: {
    name: string
    age: number
    img: string
    note?: string
  }[] 
}


function App() {
  
  const [people, setPeople] = useState<IState["people"]>([
    {
    name: "João", 
    age: 32, 
    img: "data:image/png;base64,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", 
    note: "Allergic to wine"
  },
  {
      name: "Joana", 
      age: 42, 
      img: "data:image/png;base64,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", 
      note: "I will be in the neighborhood doing errands this weekend."
    },
    {
      name: "Maria",
      age: 21,
      img: "data:image/png;base64,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",
      note: "I will be in the neighborhood doing errands this weekend."
    },
  {
    name: "José Santos",
    age: 45,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsCZhu7x_5zyALJEBUXomJ8MAQzT1Cd04YOg&usqp=CAU",
    note: "I will be in the neighborhood doing errands this weekend."
  }
  ])
  
  return (
    <div className="App">
      <h1>Dinner Party List</h1>
      <List people = {people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
