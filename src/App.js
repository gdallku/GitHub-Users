import { Component } from "react";
import "./App.css";
import ListUsers from "./components/ListUsers";
import staticUsers from "./staticUsers";

class App extends Component {
  state = {
   staticUsers: staticUsers,
  };

  handleOnDelete =(userId) =>{
    
    this.setState({
      // e shikon dhe i ndryshon userat me ata qe sjan me id e zgjedhur per me fshi
      staticUsers: this.state.staticUsers.filter((user) => user.id !== userId),
    })
  }
  render() {
    const {staticUsers} =this.state;
    return (
      <div className="App">
        <ListUsers title="GitHub Users" users={[]} />
        <ListUsers
        title="Static Users"
        users={staticUsers}
        onDelete={this.handleOnDelete}/>
        <ListUsers title="Empty List" users={[]}
        />
      </div>
    );
  }
}
export default App;
