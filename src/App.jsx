import './App.css';
import { Component } from "react";


import user from "./user.json"
// import Title from './components/Title/Title';
// import UserList from './components/List/UserList';


class App extends Component{
  state = {
   user,
  }


  handleDeleteUser = (id) => {
    this.setState(prev => ({
      user: prev.user.filter((item => item.id !== id))
    }))
  }

  render(){

    const {user} = this.state

    return (
      <>
    <ul>{user.map(({id, name, price, category}) => 
                <li key={id}>
                    <p>{name}</p>
                    <p>{price}</p>
                    <p>{category}</p>
                    <button onClick={() => this.handleDeleteUser(id)} type="button">Видалити</button>
                </li>
            )}</ul>
      </>
    )
  }
} 


export default App;