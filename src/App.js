import { Component } from "react";
import "./App.css";
import AddUserForm from "./components/AddUserForm";
import ListUsers from "./components/ListUsers";
import staticUsers from "./staticUsers";
import axios from "axios";

class App extends Component {
  state = {
   staticUsers: staticUsers,
   githubUsers:[],
  };

    handleOnDelete =(userId) =>{
    
    this.setState({
      // e shikon dhe i ndryshon userat me ata qe sjan me id e zgjedhur per me fshi
      staticUsers: this.state.staticUsers.filter((user) => user.id !== userId),

      //githubUsers: this.state.githubUsers.filter((user) => user.id !== userId),

    })
  }

  handleOnSubmit= async(username)=>{
    try{
    const response = await axios.get( `https://api.github.com/users/${username}`);
    const user= response.data;

    // if (persons.findIndex((p) => p.name == newName) != -1) {
    //   alert(`${newName} is already in the phonebook `);
    //   return;
    // }

    this.setState({
      ...this.state,
      githubUsers:[
        ...this.state.githubUsers,
        {
          id:user.id,
          name:user.name,
          login:user.login,
          avatar_url:user.avatar_url,
        }
      ]
    })
    }catch(e){
      console.log(e);
    }
  }
  
  render() {
    const {staticUsers,githubUsers} =this.state;
    return (
      <div className="App">
        <AddUserForm onSubmit={this.handleOnSubmit} />
        <ListUsers title="GitHub Users" users={githubUsers} />
        <ListUsers
        title="Static Users"
        users={staticUsers}
        // onDelete={this.handleOnDelete}
        />
        <ListUsers title="Empty List" users={[]}
        />
      </div>
    );
  }
}
export default App;
